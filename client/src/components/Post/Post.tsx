import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { ReactElement } from "react";
import { IPosts } from "../../pages/Posts/Posts";

interface PostData {
  post: IPosts;
  handleDelete: (id: number) => void;
  title?: string;
}

const useStyles = makeStyles({
  test: {
    border: (post: IPosts) => {
      if (post.title == null) {
        return "1px solid red";
      }
    },
  },
});

const Post = ({ post, handleDelete }: PostData): ReactElement => {
  const classes = useStyles(post);

  return (
    <div>
      <Card elevation={3} className={classes.test}>
        <CardHeader
          color="textSecondary"
          action={
            <IconButton onClick={() => handleDelete(post.post_id)}>
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
