import {
  Card,
  CardContent,
  CardHeader,
  Modal,
  IconButton,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { ReactElement, useEffect } from "react";
import { IPosts } from "../../pages/Posts/Posts";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

interface PostData {
  post: IPosts;
  handleEdit: (post: IPosts) => void;
  handleDelete: (id: number) => void;
  handleSubmit: any;
  title?: string;
  open: boolean;
  setOpen: any;
  updatedTitle: string;
  updatedDescription: string;
  setUpdatedTitle: any;
  setUpdatedDescription: any;
  currentPost: any;
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
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
}));

const Post = ({
  post,
  handleDelete,
  handleEdit,
  open,
  currentPost,
  updatedTitle,
  updatedDescription,
  handleSubmit,
  setUpdatedTitle,
  setUpdatedDescription,
  setOpen,
}: PostData): ReactElement => {
  const classes = useStyles(post);

  useEffect(() => {
    console.log("title:", updatedTitle);
    console.log("descr:", updatedDescription);
  }, [updatedTitle, updatedDescription]);

  const body = (
    <div className={classes.paper}>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        data-testid="form"
      >
        <TextField
          onChange={(e) => setUpdatedTitle(e.target.value)}
          className={classes.field}
          label="Title"
          variant="outlined"
          color="secondary"
          fullWidth
          value={currentPost && updatedTitle}
          required
          inputProps={{ "data-testid": "title" }}
          // error={titleError}
        />
        <TextField
          value={currentPost && updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
          className={classes.field}
          label="Description"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          inputProps={{ "data-testid": "description" }}
          // error={descriptionError}
        />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          // disabled={isDisabled}
          data-testid="submit-button"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Udpate
        </Button>
      </form>
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
              <IconButton onClick={() => handleEdit(post)}>
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
