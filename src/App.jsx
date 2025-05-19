import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{
    const newBooksmarks = [...bookmarks, blog];
    setBookmarks(newBooksmarks);
  }

  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }

  return (
    <div className="container mx-auto">
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}/>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
      </div>
    </div>
  );
}

export default App;
