import Header from '../Header'
import SideBarMenu from '../SideBarMenu'

import ThemedContext from '../ThemedContext'

import './index.css'

const NotFound = () => (
  <ThemedContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <>
          <Header />
          <div className="not-found-container">
            <SideBarMenu />
            <div
              className={`not-found-details-container ${
                darkTheme ? 'not-found-themed-cont' : ''
              }`}
            >
              <img
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
                className="not-found-img"
              />
              <h1
                className={`not-found-head ${
                  darkTheme ? 'themed-not-head' : ''
                }`}
              >
                Page Not Found
              </h1>
              <p
                className={`not-found-details ${
                  darkTheme ? 'themed-not-details' : ''
                }`}
              >
                We are sorry, the page you requested could not be found
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemedContext.Consumer>
)

export default NotFound
