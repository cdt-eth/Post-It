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
  const [open, setOpen] = useState<boolean>(false);
  const [currentPost, setCurrentPost] = useState<any>();
  const [updatedTitle, setUpdatedTitle] = useState<string>("");
  const [updatedDescription, setUpdatedDescription] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [posts]);

  const handleEdit = async (post: IPosts) => {
    console.log("post", post);
    setCurrentPost(post);
    setUpdatedTitle(post.title);
    setUpdatedDescription(post.description);
    setOpen(true);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("UPDATE:", updatedTitle, " | ", updatedDescription);

    setOpen(false);

    await fetch("http://localhost:5000/posts/" + currentPost.post_id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: updatedTitle,
        description: updatedDescription,
      }),
    });
  };

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
            <Post
              post={post}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleSubmit={handleSubmit}
              setUpdatedTitle={setUpdatedTitle}
              setUpdatedDescription={setUpdatedDescription}
              open={open}
              currentPost={currentPost}
              updatedTitle={updatedTitle}
              updatedDescription={updatedDescription}
              setOpen={setOpen}
            />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Posts;
