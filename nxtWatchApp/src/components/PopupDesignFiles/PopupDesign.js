import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {PopupMenuLink, PopInnerContainer} from './StyledComponent'
import ThemedContext from '../ThemedContext'

import './index.css'

const PopupMenuSmall = () => (
  <ThemedContext.Consumer>
    {value => {
      const {currentTabValue, changeTabValue, darkTheme} = value

      const onSelectTab = event => {
        changeTabValue(event.target.innerText)
      }

      return (
        <ul className="menu-container">
          <Link to="/" className="popup-link">
            <PopupMenuLink
              value="Home"
              selected={currentTabValue === 'Home'}
              onClick={onSelectTab}
              itemColor={darkTheme}
            >
              <PopInnerContainer
                selected={currentTabValue === 'Home'}
                itemColor={darkTheme}
              >
                <AiFillHome
                  className={`popup-link-icon ${
                    currentTabValue === 'Home' ? 'add-color' : ''
                  }`}
                />
                <p>Home</p>
              </PopInnerContainer>
            </PopupMenuLink>
          </Link>

          <Link to="/trending" className="popup-link">
            <PopupMenuLink
              value="Trending"
              selected={currentTabValue === 'Trending'}
              onClick={onSelectTab}
              itemColor={darkTheme}
            >
              <PopInnerContainer
                selected={currentTabValue === 'Trending'}
                itemColor={darkTheme}
              >
                <HiFire
                  className={`popup-link-icon ${
                    currentTabValue === 'Trending' ? 'add-color' : ''
                  }`}
                />
                <p>Trending</p>
              </PopInnerContainer>
            </PopupMenuLink>
          </Link>

          <Link to="/gaming" className="popup-link">
            <PopupMenuLink
              value="Gaming"
              selected={currentTabValue === 'Gaming'}
              onClick={onSelectTab}
              itemColor={darkTheme}
            >
              <PopInnerContainer
                selected={currentTabValue === 'Gaming'}
                itemColor={darkTheme}
              >
                <SiYoutubegaming
                  className={`popup-link-icon ${
                    currentTabValue === 'Gaming' ? 'add-color' : ''
                  }`}
                />
                <p>Gaming</p>
              </PopInnerContainer>
            </PopupMenuLink>
          </Link>

          <Link to="/saved-videos" className="popup-link">
            <PopupMenuLink
              value="Saved videos"
              selected={currentTabValue === 'Saved videos'}
              onClick={onSelectTab}
              itemColor={darkTheme}
            >
              <PopInnerContainer
                selected={currentTabValue === 'Saved videos'}
                itemColor={darkTheme}
              >
                <BiListPlus
                  className={`popup-link-icon ${
                    currentTabValue === 'Saved videos' ? 'add-color' : ''
                  }`}
                />
                <p>Saved videos</p>
              </PopInnerContainer>
            </PopupMenuLink>
          </Link>
        </ul>
      )
    }}
  </ThemedContext.Consumer>
)

export default PopupMenuSmall
