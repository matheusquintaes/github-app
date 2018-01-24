'use strict'

import React, {PropTypes} from 'react'

const Search = ({isDisable, handleSearch}) => (
  <div className='search'>
    <input
      type='search'
      onKeyUp={handleSearch}
      disabled={isDisable}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired
}
export default Search
