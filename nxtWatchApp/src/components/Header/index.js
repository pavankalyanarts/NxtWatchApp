import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import 'reactjs-popup/dist/index.css'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'

import {
  NavContainer,
  CancelBtn,
  ConfirmBtn,
  LogoutPopup,
  MenuSmallPopupContainer,
  MenuPopup,
  CancelDesc,
} from './styledComponents'

import ThemedContext from '../ThemedContext'
import PopupMenuSmall from '../PopupDesignFiles/PopupDesign'

import './index.css'

const Header = props => {
  const logoutAccount = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/')
  }
  return (
    <ThemedContext.Consumer>
      {value => {
        const {darkTheme, changeAppTheme} = value

        const changeTheme = () => {
          changeAppTheme()
        }

        return (
          <NavContainer bgColor={darkTheme}>
            <ul className="nav-list-items">
              <li className="logo-link-item">
                <Link to="/">
                  <img
                    src={`${
                      darkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }`}
                    alt="website logo"
                    className="page-logo-img"
                  />
                </Link>
              </li>
              <li className="nav-btn-item">
                <button
                  type="button"
                  className="theme-btn"
                  onClick={changeTheme}
                  data-testid="theme"
                >
                  {darkTheme ? (
                    <FiSun className="theme-light-logo" />
                  ) : (
                    <FaMoon className="theme-dark-logo" />
                  )}
                </button>
              </li>
              <li className="nav-btn-item">
                <MenuPopup
                  bgColor={darkTheme}
                  modal
                  trigger={
                    <button
                      type="button"
                      className={`menu-btn ${darkTheme ? 'menu-dark' : ''}`}
                    >
                      <GiHamburgerMenu size={23} />
                    </button>
                  }
                >
                  {close => (
                    <MenuSmallPopupContainer>
                      <button
                        type="button"
                        onClick={() => close()}
                        className={`close-menu-btn ${
                          darkTheme ? 'themed-close-icon' : ''
                        }`}
                      >
                        <MdClose size={30} />
                      </button>
                      <PopupMenuSmall />
                    </MenuSmallPopupContainer>
                  )}
                </MenuPopup>
                <button type="button" className="profile-btn">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                    className="profile-img"
                  />
                </button>
              </li>
              <li className="nav-btn-item">
                <>
                  <LogoutPopup
                    modal
                    trigger={
                      <button
                        type="button"
                        className={`logout-sm ${
                          darkTheme ? 'logout-sm-dark' : ''
                        }`}
                      >
                        <FiLogOut size={23} />
                      </button>
                    }
                  >
                    {close => (
                      <div
                        className={`logout-popup-container ${
                          darkTheme ? 'themed-logout' : ''
                        }`}
                      >
                        <CancelDesc itemColor={darkTheme}>
                          Are you sure you want to logout?
                        </CancelDesc>
                        <div className="logout-btns">
                          <CancelBtn
                            type="button"
                            onClick={() => close()}
                            itemColor={darkTheme}
                          >
                            Cancel
                          </CancelBtn>
                          <ConfirmBtn type="button" onClick={logoutAccount}>
                            Confirm
                          </ConfirmBtn>
                        </div>
                      </div>
                    )}
                  </LogoutPopup>
                  <LogoutPopup
                    modal
                    trigger={
                      <button
                        type="button"
                        className={`logout-lg ${
                          darkTheme ? 'logout-lg-dark' : ''
                        }`}
                      >
                        Logout
                      </button>
                    }
                  >
                    {close => (
                      <div
                        className={`logout-popup-container ${
                          darkTheme ? 'themed-logout' : ''
                        }`}
                      >
                        <CancelDesc itemColor={darkTheme}>
                          Are you sure you want to logout?
                        </CancelDesc>
                        <div className="logout-btns">
                          <CancelBtn
                            type="button"
                            onClick={() => close()}
                            itemColor={darkTheme}
                          >
                            Cancel
                          </CancelBtn>
                          <ConfirmBtn type="button" onClick={logoutAccount}>
                            Confirm
                          </ConfirmBtn>
                        </div>
                      </div>
                    )}
                  </LogoutPopup>
                </>
              </li>
            </ul>
          </NavContainer>
        )
      }}
    </ThemedContext.Consumer>
  )
}

export default withRouter(Header)
