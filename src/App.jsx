import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="md:flex ">
        <Blogs />
        <Bookmarks />
      </div>
    </div>
  );
}

export default App;
