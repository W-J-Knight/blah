import styles from "./BlogList.module.css"
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className={styles.bloglist}>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className={styles.blogpreview }key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Writen by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;