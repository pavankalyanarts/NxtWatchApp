import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  LabelText,
  InputBox,
  LoginButton,
} from './styledComponents'

import ThemedContext from '../ThemedContext'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isPasswordShown: false,
    isResponseError: false,
  }

  onUserEnterName = event => {
    this.setState({username: event.target.value})
  }

  onUserEnterPassword = event => {
    this.setState({password: event.target.value})
  }

  onTogglePassword = event => {
    this.setState({isPasswordShown: event.target.checked})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 7})
    const {history} = this.props
    history.replace('/')
  }

  onUserLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.setState({isResponseError: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {
      username,
      password,
      isPasswordShown,
      isResponseError,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemedContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <LoginContainer bgColor={darkTheme}>
              <form
                className={`login-form-container ${
                  darkTheme ? 'themed-login-form' : ''
                }`}
                onSubmit={this.onUserLogin}
              >
                <img
                  src={`${
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }`}
                  alt="website logo"
                  className="page-logo-img"
                />
                <div>
                  <LabelText itemColor={darkTheme} htmlFor="userName">
                    USERNAME
                  </LabelText>
                  <br />
                  <InputBox
                    type="text"
                    id="userName"
                    value={username}
                    placeholder="Username"
                    onChange={this.onUserEnterName}
                    itemColor={darkTheme}
                  />
                </div>
                <div>
                  <LabelText itemColor={darkTheme} htmlFor="userPassword">
                    PASSWORD
                  </LabelText>
                  <br />
                  <InputBox
                    type={isPasswordShown ? 'text' : 'password'}
                    id="userPassword"
                    value={password}
                    placeholder="Password"
                    onChange={this.onUserEnterPassword}
                    itemColor={darkTheme}
                  />
                </div>
                <div className="password-display-container">
                  <input
                    id="checkBox"
                    type="checkbox"
                    className="check-box"
                    onClick={this.onTogglePassword}
                  />
                  <label
                    htmlFor="checkBox"
                    className={`show-password-text ${
                      darkTheme ? 'show-pass-themed' : ''
                    }`}
                  >
                    Show Password
                  </label>
                </div>
                <LoginButton type="submit">Login</LoginButton>
                {isResponseError && <p className="error-msg">*{errorMsg}</p>}
              </form>
            </LoginContainer>
          )
        }}
      </ThemedContext.Consumer>
    )
  }
}

export default Login
