import "./App.css";
import Blog from "./components/blogs/Blog";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="md:flex ">
        <Blog />
        <Bookmarks />
      </div>
    </div>
  );
}

export default App;
