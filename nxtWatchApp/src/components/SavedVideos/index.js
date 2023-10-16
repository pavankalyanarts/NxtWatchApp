import {HiFire} from 'react-icons/hi'
import {
  GamingContainer,
  GamingHeader,
  NoVideosContainer,
  FailureHeading,
  FailureDetails,
} from './StyledComponents'

import ThemedContext from '../ThemedContext'
import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import TrendingVideoItem from '../TrendingVideoItem'

import './index.css'

const SavedVideos = () => (
  <ThemedContext.Consumer>
    {value => {
      const {savedVideos, darkTheme} = value

      const isThereSavedVideos = savedVideos.length > 0

      return (
        <>
          <Header />
          <div className="savedVideo-page-container">
            <SideBarMenu tabValue="Saved videos" />

            <GamingContainer bgColor={darkTheme}>
              <GamingHeader bgColor={darkTheme}>
                <div
                  className={`savedVideo-icon-container ${
                    darkTheme ? 'saved-icon-cont' : ''
                  }`}
                >
                  <HiFire className="trend-icon" />
                </div>
                <h1
                  className={`savedVideo-heading ${
                    darkTheme ? 'themed-saved-head' : ''
                  }`}
                >
                  Saved Videos
                </h1>
              </GamingHeader>
              {isThereSavedVideos ? (
                <ul className="savedVideo-list">
                  {savedVideos.map(eachVideo => (
                    <TrendingVideoItem key={eachVideo.id} video={eachVideo} />
                  ))}
                </ul>
              ) : (
                <NoVideosContainer>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                    className="no-saved-img"
                  />
                  <FailureHeading bgColor={darkTheme}>
                    No saved videos found
                  </FailureHeading>
                  <FailureDetails bgColor={darkTheme}>
                    You can save your videos while watching
                  </FailureDetails>
                </NoVideosContainer>
              )}
            </GamingContainer>
          </div>
        </>
      )
    }}
  </ThemedContext.Consumer>
)

export default SavedVideos
