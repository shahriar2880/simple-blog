import PropTypes from "prop-types"; // ES6
import { FiBookmark } from "react-icons/fi";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author_img,
    author,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-15">
      <img
        className="w-full mb-8"
        src={cover}
        alt="Cover picture of the title"
      />
      <div className="flex justify-between mt-2 mb-4">
        <div className="flex">
          <img
            className="rounded-full h-14 w-14"
            src={author_img}
            alt="author image"
          />
          <div className="ml-6">
            <h1 className="text-2xl">{author}</h1>
            <p className="text-sm text-teal-600">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center text-sm text-amber-700 font-light">
          <span className="">{reading_time} min read</span>
          <button onClick={()=>handleAddToBookmark(blog)} className="ml-2">
            <FiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-3xl ">{title}</h2>
      <p className="mt-2">
        {hashtags.map((hash, index) => (
          <span className="mt-2" key={index}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={()=> handleMarkAsRead(reading_time)} className="text-blue-300 font-bold text-sm underline" href="">
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
