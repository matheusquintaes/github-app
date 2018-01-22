/* global fetch */
'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      fetch(`https://api.github.com/users/${value}`)
      .then(data => (data.json()))
      .then(response => {
        console.log(response)
        this.setState({
          userinfo: {
            username: response.name,
            login: response.login,
            photo: response.avatar_url,
            repos: response.public_repos,
            followers: response.followers,
            following: response.following
          }
        })
      })
    }
  }

  getRepos (type) {
    return (e) => {
      fetch(`https://api.github.com/users/matheusquintaes/${type}`)
        .then(data => (data.json()))
        .then(response => {
          this.setState({
            [type] : response.map((repo) => ({
              name: repo.name,
              link: repo.html_url,
              id: repo.id
            }))
          })
        })
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}
export default App
