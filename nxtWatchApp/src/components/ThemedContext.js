import React from 'react'

const ThemedContext = React.createContext({
  darkTheme: false,
  savedVideos: [],
  currentTabValue: '',
  addToSavedVideos: () => {},
  changeTabValue: () => {},
  changeAppTheme: () => {},
})

export default ThemedContext
