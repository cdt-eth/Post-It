import {
  Card,
  CardContent,
  CardHeader,
  Modal,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { ReactElement } from "react";
import { IPosts } from "../../pages/Posts/Posts";

interface PostData {
  post: IPosts;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
  title?: string;
  open: boolean;
  setOpen: any;
}

const useStyles = makeStyles((theme) => ({
  test: {
    border: (post: IPosts) => {
      if (post.title == null) {
        return "1px solid red";
      }
    },
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    left: "50%",
    top: "50%",
    marginLeft: "-150px",
    marginTop: "-150px",
  },
}));

const Post = ({
  post,
  handleDelete,
  handleEdit,
  open,
  setOpen,
}: PostData): ReactElement => {
  const classes = useStyles(post);

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      {/* <Post /> */}
    </div>
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card elevation={3} className={classes.test}>
        <CardHeader
          color="textSecondary"
          action={
            <>
              <IconButton onClick={() => handleEdit(post.post_id)}>
                <EditOutlinedIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(post.post_id)}>
                <DeleteOutlined />
              </IconButton>
            </>
          }
          title={post.title ? post.title : "no title"}
        ></CardHeader>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {post.description}
          </Typography>
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};
export default Post;
