import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import ThemedContext from './components/ThemedContext'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    savedVideos: [],
    isSavedVideo: false,
    currentTabValue: '',
    darkTheme: false,
  }

  addToSavedVideos = videoDetails => {
    this.setState(prevState => {
      const {savedVideos} = prevState
      const videosChecking = savedVideos.findIndex(
        eachVideo => eachVideo.id === videoDetails.id,
      )
      if (videosChecking !== -1) {
        return {
          savedVideos: savedVideos.filter(
            eachItem => eachItem.id !== videoDetails.id,
          ),
        }
      }
      return {savedVideos: [...savedVideos, videoDetails]}
    })
  }

  changeTabValue = value => {
    this.setState({currentTabValue: value})
  }

  changeAppTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  render() {
    const {darkTheme, savedVideos, isSavedVideo, currentTabValue} = this.state
    return (
      <ThemedContext.Provider
        value={{
          darkTheme,
          currentTabValue,
          savedVideos,
          isSavedVideo,
          addToSavedVideos: this.addToSavedVideos,
          changeTabValue: this.changeTabValue,
          changeAppTheme: this.changeAppTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemedContext.Provider>
    )
  }
}

export default App
