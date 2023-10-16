import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {GrFormClose, GrSearch} from 'react-icons/gr'
import {
  HomeContainer,
  FailureHeading,
  FailureDetails,
  RetryButton,
  NoVideosContainer,
} from './StyledComponents'

import ThemedContext from '../ThemedContext'

import Header from '../Header'
import HomeVideoItem from '../HomeVideoItem'
import SideBarMenu from '../SideBarMenu'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    userSearchInput: '',
    videosList: [],
    bannerDisplay: true,
    apiResponse: apiStatus.initial,
  }

  componentDidMount() {
    this.fetchVideoData()
  }

  fetchVideoData = async () => {
    this.setState({apiResponse: apiStatus.inProgress})

    const {userSearchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${userSearchInput}`
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
      const videoData = videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))
      this.setState({videosList: videoData, apiResponse: apiStatus.success})
    } else {
      this.setState({apiResponse: apiStatus.failure})
    }
  }

  onUserEnterSearch = event => {
    this.setState({userSearchInput: event.target.value})
  }

  onSearchForVideo = () => {
    this.fetchVideoData()
  }

  closeBanner = () => {
    this.setState({bannerDisplay: false})
  }

  renderBanner = () => {
    const {bannerDisplay} = this.state
    return (
      <>
        {bannerDisplay && (
          <div className="premium-banner-container" data-testid="banner">
            <div className="premium-details-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
                className="nxt-watch-logo"
              />
              <p className="premium-context">
                Buy Nxt Watch Premium prepaid plans with UPI
              </p>
              <button type="button" className="premium-get-btn">
                GET IT NOW
              </button>
            </div>
            <button
              type="button"
              className="premium-close-btn"
              onClick={this.closeBanner}
            >
              <GrFormClose size={20} />
            </button>
          </div>
        )}
      </>
    )
  }

  renderSearchBar = darkTheme => {
    const {userSearchInput} = this.state
    return (
      <div className="search-container">
        <input
          type="search"
          className={`search-input ${darkTheme ? 'themed-text' : ''}`}
          placeholder="Search"
          value={userSearchInput}
          onChange={this.onUserEnterSearch}
        />
        <button
          type="button"
          className={`search-btn ${darkTheme ? 'themed-btn' : ''}`}
          onClick={this.onSearchForVideo}
          data-testid="searchButton"
        >
          <GrSearch />
        </button>
      </div>
    )
  }

  renderVideos = darkTheme => {
    const {videosList} = this.state
    const videosFound = videosList.length > 0

    return (
      <>
        {videosFound ? (
          <ul className="video-list-container">
            {videosList.map(eachVideo => (
              <HomeVideoItem key={eachVideo.id} video={eachVideo} />
            ))}
          </ul>
        ) : (
          <NoVideosContainer>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="no-video-img"
            />
            <FailureHeading textColor={darkTheme}>
              No Search results found
            </FailureHeading>
            <FailureDetails textColor={darkTheme}>
              Try different key word or remove search
            </FailureDetails>
            <RetryButton type="button" onClick={this.fetchVideoData}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )}
      </>
    )
  }

  renderLoader = () => (
    <div className="home-loader-container" data-testid="loader">
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
      <RetryButton type="button" onClick={this.fetchVideoData}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  renderHomePage = darkTheme => {
    const {apiResponse} = this.state
    switch (apiResponse) {
      case apiStatus.success:
        return this.renderVideos(darkTheme)
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
              <div className="home-page-container">
                <SideBarMenu tabValue="Home" />
                <HomeContainer bgColor={darkTheme} data-testid="home">
                  {this.renderBanner()}
                  <div className="home-watch-container">
                    {this.renderSearchBar(darkTheme)}
                    {this.renderHomePage(darkTheme)}
                  </div>
                </HomeContainer>
              </div>
            </>
          )
        }}
      </ThemedContext.Consumer>
    )
  }
}

export default Home
