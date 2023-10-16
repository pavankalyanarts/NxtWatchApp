import ReactPlayer from 'react-player'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import ThemedContext from '../ThemedContext'

import {
  VideoDetailsContainer,
  VideoDetailsSection,
  VideoReactionContainer,
  VideoTitle,
  ReactionButton,
  VideoChannelSection,
  ChannelName,
  ChannelSubs,
  VideoDescription,
} from './StyledComponents'

import './index.css'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisliked, videoReactionChange} = props
  const {
    id,
    title,
    videoUrl,
    viewCount,
    publishedAt,
    description,
    name,
    profileImageUrl,
    subscriberCount,
  } = videoDetails

  return (
    <ThemedContext.Consumer>
      {value => {
        const {addToSavedVideos, savedVideos, darkTheme} = value

        const addVideoToSaved = () => {
          addToSavedVideos(videoDetails)
        }
        const onVideoReact = event => {
          videoReactionChange(event.target.value)
        }

        const isSavedVideo = savedVideos.findIndex(
          eachItem => eachItem.id === id,
        )

        return (
          <VideoDetailsContainer
            bgColor={darkTheme}
            data-testid="videoItemDetails"
          >
            <div className="video-container">
              <ReactPlayer
                url={videoUrl}
                controls
                width="640"
                height="360"
                className="react-player"
              />
            </div>
            <VideoDetailsSection>
              <VideoTitle textColor={darkTheme}>{title}</VideoTitle>
              <VideoReactionContainer>
                <ul className="video-stats-section">
                  <li className="views-item">{viewCount} views</li>
                  <li className="timeUploaded-item">
                    {publishedAt !== undefined && publishedAt.slice(4)} ago
                  </li>
                </ul>
                <ul className="video-reaction-section">
                  <li>
                    <ReactionButton
                      type="button"
                      onClick={onVideoReact}
                      value="like"
                      isBtnActive={isLiked}
                    >
                      <BiLike className="reaction-icon" />
                      Like
                    </ReactionButton>
                  </li>
                  <li>
                    <ReactionButton
                      type="button"
                      onClick={onVideoReact}
                      value="dislike"
                      isBtnActive={isDisliked}
                    >
                      <BiDislike className="reaction-icon" />
                      Dislike
                    </ReactionButton>
                  </li>
                  <li>
                    <ReactionButton
                      type="button"
                      onClick={addVideoToSaved}
                      isBtnActive={isSavedVideo !== -1}
                    >
                      <BiListPlus className="reaction-icon" />
                      Save
                    </ReactionButton>
                  </li>
                </ul>
              </VideoReactionContainer>
              <hr />
            </VideoDetailsSection>
            <VideoChannelSection>
              <div className="channel-details-container">
                <img
                  src={profileImageUrl}
                  alt={name}
                  className="channel-profile-img"
                />
                <div className="channel-details">
                  <ChannelName textColor={darkTheme}>{name}</ChannelName>
                  <ChannelSubs>{subscriberCount} subscribers</ChannelSubs>
                  <VideoDescription textColor={darkTheme}>
                    {description}
                  </VideoDescription>
                </div>
              </div>
            </VideoChannelSection>
          </VideoDetailsContainer>
        )
      }}
    </ThemedContext.Consumer>
  )
}

export default PlayVideoView
