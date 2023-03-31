import styles from "./BlogDetails.module.css"
import { useParams,  useNavigate} from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
        navigate('/');
    });
  };

  return (
    <div className="container">
    <div className={styles.blogdetails}>
      {error && <h3>{error}</h3>}
      {isPending && <h3>Loading...</h3>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Writen by{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
    </div>
  );
};

export default BlogDetails;