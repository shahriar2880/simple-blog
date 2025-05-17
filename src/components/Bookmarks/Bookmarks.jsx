import PropTypes from 'prop-types'
import React from 'react'
import Bookmark from '../../bookmark/Bookmark'

const Bookmarks = ({bookmarks}) => {

  return (
    <div className='md:w-1/3 rounded bg-gray-100 ml-4 mt-2'>
      <h2 className='p-4 m-4 text-md bg-amber-100 rounded'>Booksmarked Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}/>)
      }
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks
