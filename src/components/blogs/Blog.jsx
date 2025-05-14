import React, { useEffect, useState } from 'react'

const Blog = () => {
const [blogs, setBlogs] = useState([])

useEffect(()=>{
    fetch('blogs.json')
    .then(res=> res.json())
    .then(data => setBlogs(data))
},[])

  return (
    <div>
      Blogs
    </div>
  )
}

export default Blog
