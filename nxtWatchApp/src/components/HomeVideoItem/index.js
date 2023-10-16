import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ThemedContext from '../ThemedContext'

import './index.css'

const HomeVideoItem = props => {
  const {video} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt, id} = video

  const postedDate = formatDistanceToNow(new Date(publishedAt))
  const dateArr = postedDate.split(' ')

  return (
    <ThemedContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <Link to={`/videos/${id}`} className="video-link">
            <li className="video-item-container">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-img"
              />
              <div className="video-sub-container">
                <img
                  src={channel.profileImageUrl}
                  alt={channel.name}
                  className="channel-img"
                />
                <div className="video-about-container">
                  <p
                    className={`video-title ${darkTheme ? 'themed-title' : ''}`}
                  >
                    {title}
                  </p>
                  <ul className="video-stats">
                    <li className="stat-item1">{channel.name}</li>
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

export default HomeVideoItem
