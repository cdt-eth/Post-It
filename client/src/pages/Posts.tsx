import { useState, useEffect, ReactElement } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

interface Post {
  post_id: number;
  title: string;
  description: string;
}

const Posts = (): ReactElement => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <Typography variant="h2" color="secondary" align="center">
        Posts go here
      </Typography>

      <Grid container>
        {posts.map((post) => (
          <Grid item key={post.post_id} xs={12} md={6} lg={4}>
            <Paper>
              {post.title} | {post.description}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;
