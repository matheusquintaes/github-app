'use strict'

import React from 'react'

const Actions = ({getRepos, getStarred}) => (
  <div className='action'>
    <button onClick={getRepos}>Ver Repositórios</button>
    <button onClick={getStarred}>Ver Favoritos</button>
  </div>
)

export default Actions
