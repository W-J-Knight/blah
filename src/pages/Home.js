import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  

  return (
    <div className="container">
      {error && <h3>{error}</h3>}
      {isPending && <h3>Loading...</h3>}
      {blogs && <BlogList blogs={blogs} title="Blah Blah Blah!" />}
    </div>
  );
};

export default Home;