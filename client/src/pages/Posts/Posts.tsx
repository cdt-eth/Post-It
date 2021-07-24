import { useState, useEffect, ReactElement } from "react";
import { Container } from "@material-ui/core";
import Post from "../../components/Post/Post";
import Masonry from "react-masonry-css";

export interface IPosts {
  post_id: number;
  title: string;
  description: string;
}

const Posts = (): ReactElement => {
  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleDelete = async (id: number) => {
    await fetch("http://localhost:5000/posts/" + id, {
      method: "DELETE",
    });

    const newPosts = posts.filter((post) => post.post_id !== id);
    setPosts(newPosts);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts.map((post) => (
          <div key={post.post_id}>
            <Post post={post} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Posts;
