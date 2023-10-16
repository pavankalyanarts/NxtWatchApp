import {Link} from 'react-router-dom'

import ThemedContext from '../ThemedContext'

import './index.css'

const TrendingVideoItem = props => {
  const {video} = props
  const {
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
    id,
  } = video
  const dateArr = publishedAt.split(' ')

  return (
    <ThemedContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <Link to={`/videos/${id}`} className="video-link">
            <li className="trend-video-item">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="trend-thumbnail-img"
              />
              <div className="video-sub-details">
                <img src={profileImageUrl} alt={name} className="channel-img" />
                <div className="video-about-container">
                  <p
                    className={`video-title ${
                      darkTheme ? 'themed-item-title' : ''
                    }`}
                  >
                    {title}
                  </p>
                  <ul className="video-stats">
                    <li className="stat-item1">{name}</li>
                    <li className="stat-item2">{viewCount} views</li>
                    <li className="stat-item">{`${dateArr[1]} ${dateArr[2]} ago`}</li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </ThemedContext.Consumer>
  )
}

export default TrendingVideoItem
