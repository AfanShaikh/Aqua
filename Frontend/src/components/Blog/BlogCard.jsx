import { FaCalendar, FaArrowRight } from "react-icons/fa";

function BlogCard({ blog, onReadMore }) {
  return (
    <article className="blog-card">
      <img
        src={blog.image}
        alt={blog.title}
        loading="lazy"
      />

      <div className="blog-content">
        <small>
          <FaCalendar /> {blog.date}
        </small>

        <h3>{blog.title}</h3>

        <p>{blog.description}</p>

        <a
          href="#"
          className="read-more"
          onClick={(e) => {
            e.preventDefault();
            onReadMore(blog);
          }}
        >
          Read More <FaArrowRight />
        </a>
      </div>
    </article>
  );
}

export default BlogCard;