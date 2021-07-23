import { useState, useEffect, ReactElement } from "react";
import { Grid } from "@material-ui/core";
import Post from "../../components/Post/Post";

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

  return (
    <div>
      <Grid container>
        {posts.map((post) => (
          <Grid item key={post.post_id} xs={12} md={6} lg={4}>
            <Post post={post} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;
