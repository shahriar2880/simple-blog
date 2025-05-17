import PropTypes from "prop-types"; // ES6

const Blog = ({ blog }) => {
  const { title, cover, author_img, author, reading_time, posted_date , hashtags } = blog;
  return (
    <div>
      
      <img src={cover} alt="Cover picture of the title" />
      <div className="flex justify-between">
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
        <div>
          {reading_time}{" "}
          <span className="text-md text-amber-700 font-light">minutes</span>
        </div>
      </div>
      <h2 className="text-3xl">{title}</h2>
      <p>
        {
            hashtags.map((hash, index) => <span key={index}><a href=""> {hash}</a></span>)
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
