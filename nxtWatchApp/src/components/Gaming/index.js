import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'
import {
  NoVideosContainer,
  FailureHeading,
  FailureDetails,
  RetryButton,
} from '../Home/StyledComponents'

import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import GamingVideoItem from '../GamingVideoItem'

import ThemedContext from '../ThemedContext'
import {GamingContainer, GamingHeader} from './StyledComponents'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingVideoList: [], apiResponse: apiStatus.initial}

  componentDidMount() {
    this.fetchGamingData()
  }

  fetchGamingData = async () => {
    this.setState({apiResponse: apiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
        viewCount: eachItem.view_count,
      }))

      this.setState({
        gamingVideoList: formattedData,
        apiResponse: apiStatus.success,
      })
    } else {
      this.setState({apiResponse: apiStatus.failure})
    }
  }

  renderGamingVideos = () => {
    const {gamingVideoList} = this.state
    return (
      <ul className="gaming-video-list">
        {gamingVideoList.map(eachVideo => (
          <GamingVideoItem key={eachVideo.id} video={eachVideo} />
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
      <RetryButton type="button" onClick={this.fetchGamingData}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  renderGamingPage = darkTheme => {
    const {apiResponse} = this.state
    switch (apiResponse) {
      case apiStatus.success:
        return this.renderGamingVideos()
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
              <div className="gaming-page-container">
                <SideBarMenu tabValue="Gaming" />
                <GamingContainer bgColor={darkTheme} data-testid="Gaming">
                  <GamingHeader bgColor={darkTheme} data-testid="banner">
                    <div
                      className={`gaming-icon-container ${
                        darkTheme ? 'themed-icon-cont' : ''
                      }`}
                    >
                      <SiYoutubegaming className="trend-icon" />
                    </div>
                    <h1
                      className={`gaming-heading ${
                        darkTheme ? 'themed-game-head' : ''
                      }`}
                    >
                      Gaming
                    </h1>
                  </GamingHeader>
                  {this.renderGamingPage(darkTheme)}
                </GamingContainer>
              </div>
            </>
          )
        }}
      </ThemedContext.Consumer>
    )
  }
}

export default Gaming
