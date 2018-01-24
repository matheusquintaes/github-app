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
      starred: [],
      isFetching: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({
        isFetching: true
      })
      fetch(`https://api.github.com/users/${value}`)
      .then(data => (data.json()))
      .then(response => {
        this.setState({
          userinfo: {
            username: response.name,
            login: response.login,
            photo: response.avatar_url,
            repos: response.public_repos,
            followers: response.followers,
            following: response.following
          },
          repos: [],
          starred: []
        })
      })
      .then(() => this.setState({
        isFetching: false
      }))
    }
  }

  getRepos (type) {
    return (e) => {
      const username = this.state.userinfo.login
      fetch(`https://api.github.com/users/${username}/${type}`)
        .then(data => (data.json()))
        .then(response => {
          this.setState({
            [type]: response.map((repo) => ({
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
      {...this.state}
      handleSearch={this.handleSearch}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}
export default App
