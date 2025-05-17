import PropTypes from 'prop-types'
import React from 'react'

const Bookmark = ({bookmark}) => {

    const {title} = bookmark
  return (
    <div className='bg-slate-200  p-4 m-4'>
      <h3 className='text-sm'>{title}</h3>
    </div>
  )
}

Bookmark.propType = {
    bookmark: PropTypes.object
}

export default Bookmark
