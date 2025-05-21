import PropTypes from 'prop-types'
import React from 'react'
import Bookmark from '../../bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {

  return (
    <div className='md:w-1/3 rounded bg-gray-100 ml-4 mt-2'>
      <div className=' text-xs bg-amber-100 rounded p-4 m-4'>
        <h2 className="text-4xl">Reading Time: {readingTime} <span className='text-red-300'>minutes</span></h2>
      </div>
      <h2 className='p-4 m-4 text-md bg-amber-100 rounded'>Booksmarked Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}/>)
      }
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks
