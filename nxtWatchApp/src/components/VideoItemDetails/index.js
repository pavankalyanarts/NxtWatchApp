import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {
  FailureHeading,
  FailureDetails,
  RetryButton,
  NoVideosContainer,
} from '../Home/StyledComponents'

import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import PlayVideoView from '../PlayVideoView'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiResponse: apiStatus.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  fetchVideoDetails = async () => {
    this.setState({apiResponse: apiStatus.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const videosDetails = data.video_details
      const formattedDetails = {
        id: videosDetails.id,
        title: videosDetails.title,
        videoUrl: videosDetails.video_url,
        thumbnailUrl: videosDetails.thumbnail_url,
        name: videosDetails.channel.name,
        profileImageUrl: videosDetails.channel.profile_image_url,
        subscriberCount: videosDetails.channel.subscriber_count,
        viewCount: videosDetails.view_count,
        publishedAt: formatDistanceToNow(new Date(videosDetails.published_at)),
        description: videosDetails.description,
      }
      this.setState({
        videoDetails: formattedDetails,
        apiResponse: apiStatus.success,
      })
    } else {
      this.setState({apiResponse: apiStatus.failure})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailure = () => (
    <NoVideosContainer>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="failure-img"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDetails>
        We are having some trouble to complete your request. Please try again.
      </FailureDetails>
      <RetryButton type="button" onClick={this.fetchVideoDetails}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  videoReactionChange = value => {
    if (value === 'like') {
      this.setState(prevState => ({
        isLiked: !prevState.isLiked,
        isDisliked: false,
      }))
    } else {
      this.setState(prevState => ({
        isDisliked: !prevState.isDisliked,
        isLiked: false,
      }))
    }
  }

  renderPlayVideoView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    return (
      <PlayVideoView
        videoDetails={videoDetails}
        isLiked={isLiked}
        isDisliked={isDisliked}
        videoReactionChange={this.videoReactionChange}
      />
    )
  }

  renderVideoDetailsView = () => {
    const {apiResponse} = this.state
    switch (apiResponse) {
      case apiStatus.success:
        return this.renderPlayVideoView()
      case apiStatus.inProgress:
        return this.renderLoader()
      case apiStatus.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="videoDetails-page-container">
          <SideBarMenu />
          {this.renderVideoDetailsView()}
        </div>
      </>
    )
  }
}

export default VideoItemDetails
