import "./Blog.css";

import FadeUp from "../FadeUp/FadeUp";
import blogs from "../../data/blogs";
import BlogCard from "./BlogCard";

function Blog({ onReadMore }) {
  return (
    <section
      id="blog"
      className="container section-padding"
    >
      <FadeUp>
        <h2 className="section-title">
          Latest News & Blog
        </h2>
      </FadeUp>

      <FadeUp>
        <div className="blog-grid">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onReadMore={onReadMore}
            />
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

export default Blog;