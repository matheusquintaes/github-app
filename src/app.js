'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Matheus Quintães',
        login: 'matheusquintaes',
        photo: 'https://avatars1.githubusercontent.com/u/8750294?v=4',
        repos: 13,
        followers: 1,
        following: 0
      },
      repos: [],
      starred: []
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}
export default App
