import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { ReactElement } from "react";
import { IPosts } from "../../pages/Posts/Posts";

interface PostData {
  post: IPosts;
}

const Post = ({ post }: PostData): ReactElement => {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          color="textSecondary"
          action={
            <IconButton>
              <DeleteOutlined />
            </IconButton>
          }
          title={post.title ? post.title : "no title"}
        ></CardHeader>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {post.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default Post;
