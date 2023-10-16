import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'
import {TrendingContainer, TrendingHeader} from './StyledComponents'

import ThemedContext from '../ThemedContext'

import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import TrendingVideoItem from '../TrendingVideoItem'
import {
  NoVideosContainer,
  FailureHeading,
  RetryButton,
  FailureDetails,
} from '../Home/StyledComponents'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideoList: [], apiResponse: apiStatus.initial}

  componentDidMount() {
    this.fetchTrendingData()
  }

  fetchTrendingData = async () => {
    this.setState({apiResponse: apiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const {videos} = data
      const formattedData = videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        viewCount: eachItem.view_count,
        publishedAt: formatDistanceToNow(new Date(eachItem.published_at)),
      }))

      this.setState({
        trendingVideoList: formattedData,
        apiResponse: apiStatus.success,
      })
    } else {
      this.setState({apiResponse: apiStatus.failure})
    }
  }

  renderTrendingVideos = () => {
    const {trendingVideoList} = this.state

    return (
      <ul className="trending-video-list">
        {trendingVideoList.map(eachVideo => (
          <TrendingVideoItem key={eachVideo.id} video={eachVideo} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailure = darkTheme => (
    <NoVideosContainer>
      <img
        src={`${
          darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }`}
        alt="failure view"
        className="failure-img"
      />
      <FailureHeading textColor={darkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureDetails textColor={darkTheme}>
        We are having some trouble to complete your request. Please try again.
      </FailureDetails>
      <RetryButton type="button" onClick={this.fetchTrendingData}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  renderTrendPage = darkTheme => {
    const {apiResponse} = this.state
    switch (apiResponse) {
      case apiStatus.success:
        return this.renderTrendingVideos()
      case apiStatus.inProgress:
        return this.renderLoader()
      case apiStatus.failure:
        return this.renderFailure(darkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemedContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <Header />
              <div className="trending-page-container">
                <SideBarMenu tabValue="Trending" />
                <TrendingContainer bgColor={darkTheme} data-testid="Trending">
                  <TrendingHeader bgColor={darkTheme} data-testid="banner">
                    <div
                      className={`trending-icon-container ${
                        darkTheme ? 'themed-icon-cont' : ''
                      }`}
                    >
                      <HiFire className="trend-icon" />
                    </div>
                    <h1
                      className={`trending-heading ${
                        darkTheme ? 'themed-trend-head' : ''
                      }`}
                    >
                      Trending
                    </h1>
                  </TrendingHeader>
                  {this.renderTrendPage(darkTheme)}
                </TrendingContainer>
              </div>
            </>
          )
        }}
      </ThemedContext.Consumer>
    )
  }
}

export default Trending
