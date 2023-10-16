import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {SideBarLink, SideBarContainer} from './StyledComponents'
import ThemedContext from '../ThemedContext'
import './index.css'

const SideBarMenu = props => (
  <ThemedContext.Consumer>
    {value => {
      const {currentTabValue, changeTabValue, darkTheme} = value
      const {tabValue} = props

      const onSelectTab = event => {
        changeTabValue(event.target.innerText)
      }

      return (
        <SideBarContainer bgColor={darkTheme}>
          <ul className="side-nav-link-list">
            <Link to="/" className="link">
              <SideBarLink
                value="Home"
                selected={currentTabValue === 'Home' || tabValue === 'Home'}
                onClick={onSelectTab}
                itemColor={darkTheme}
              >
                <AiFillHome
                  className={`side-link-icon ${
                    currentTabValue === 'Home' || tabValue === 'Home'
                      ? 'add-color'
                      : ''
                  }`}
                />{' '}
                Home
              </SideBarLink>
            </Link>
            <Link to="/trending" className="link">
              <SideBarLink
                value="Trending"
                selected={
                  currentTabValue === 'Trending' || tabValue === 'Trending'
                }
                onClick={onSelectTab}
                itemColor={darkTheme}
              >
                <HiFire
                  className={`side-link-icon ${
                    currentTabValue === 'Trending' || tabValue === 'Trending'
                      ? 'add-color'
                      : ''
                  }`}
                />{' '}
                Trending
              </SideBarLink>
            </Link>
            <Link to="/gaming" className="link">
              <SideBarLink
                value="Gaming"
                selected={currentTabValue === 'Gaming' || tabValue === 'Gaming'}
                onClick={onSelectTab}
                itemColor={darkTheme}
              >
                <SiYoutubegaming
                  className={`side-link-icon ${
                    currentTabValue === 'Gaming' || tabValue === 'Gaming'
                      ? 'add-color'
                      : ''
                  }`}
                />{' '}
                Gaming
              </SideBarLink>
            </Link>
            <Link to="/saved-videos" className="link">
              <SideBarLink
                value="Saved videos"
                selected={
                  currentTabValue === 'Saved videos' ||
                  tabValue === 'Saved videos'
                }
                onClick={onSelectTab}
                itemColor={darkTheme}
              >
                <BiListPlus
                  className={`side-link-icon ${
                    currentTabValue === 'Saved videos' ||
                    tabValue === 'Saved videos'
                      ? 'add-color'
                      : ''
                  }`}
                />{' '}
                Saved videos
              </SideBarLink>
            </Link>
          </ul>
          <div className="contact-details-container">
            <p className={`contact-head ${darkTheme ? 'themed-text' : ''}`}>
              CONTACT US
            </p>
            <ul className="social-link-list">
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                  className="social-links"
                />
              </li>
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                  className="social-links"
                />
              </li>
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                  className="social-links"
                />
              </li>
            </ul>
            <p className={`contact-msg ${darkTheme ? 'themed-text' : ''}`}>
              Enjoy! Now to see your channels and recommendations!
            </p>
          </div>
        </SideBarContainer>
      )
    }}
  </ThemedContext.Consumer>
)

export default SideBarMenu
