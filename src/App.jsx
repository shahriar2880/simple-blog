import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog =>{
    const newBooksmarks = [...bookmarks, blog];
    setBookmarks(newBooksmarks);
  }
  return (
    <div className="container mx-auto">
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark}/>
        <Bookmarks bookmarks={bookmarks}/>
      </div>
    </div>
  );
}

export default App;
