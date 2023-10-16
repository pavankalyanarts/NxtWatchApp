import {Link} from 'react-router-dom'

import ThemedContext from '../ThemedContext'

import './index.css'

const GamingVideoItem = props => {
  const {video} = props
  const {title, thumbnailUrl, viewCount, id} = video

  return (
    <ThemedContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <Link to={`/videos/${id}`} className="video-link">
            <li className="gaming-video-item">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="gaming-thumbnail-img"
              />
              <div className="video-details">
                <h1
                  className={`game-title ${
                    darkTheme ? 'themed-game-title' : ''
                  }`}
                >
                  {title}
                </h1>
                <p className="game-stats">{viewCount} Watching Worldwide</p>
              </div>
            </li>
          </Link>
        )
      }}
    </ThemedContext.Consumer>
  )
}

export default GamingVideoItem
