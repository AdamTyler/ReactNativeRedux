// iOS only code

// Import a library to help create a component
import React from 'react'
import { AppRegistry } from 'react-native'
import Header from './src/components/Header'

// Create a component
const App = () => (
  <Header text={'Albums'}/>
)

// Render to device
AppRegistry.registerComponent('albums', () => App)
