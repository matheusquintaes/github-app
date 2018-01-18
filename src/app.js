'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'
import Starred from './components/starred'

const App = () => (
  <div className='app'>
    <Search />
    <UserInfo />
    <Actions />
    <Repos />
    <Starred />
  </div>
)

export default App
