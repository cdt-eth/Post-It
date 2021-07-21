import { Paper } from "@material-ui/core";
import { ReactElement } from "react";
import { IPosts } from "../pages/Posts";

interface PostData {
  post: IPosts;
}

const Post = ({ post }: PostData): ReactElement => {
  return (
    <Paper>
      {post.title} | {post.description}
    </Paper>
  );
};
export default Post;
