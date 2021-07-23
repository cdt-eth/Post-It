import { useState, ReactElement, useEffect } from "react";
import {
  makeStyles,
  Typography,
  Button,
  Container,
  TextField,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Create = (): ReactElement => {
  const [title, setTitle] = useState<string>("");
  const [titleError, setTitleError] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const classes = useStyles();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setTitleError(false);
    setDescriptionError(false);

    if (title === "") setTitleError(true);
    if (description === "") setDescriptionError(true);

    if (title && description) {
      try {
        const body = { title, description };
        const response = fetch("http://localhost:5000/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        console.log("response", response);
      } catch (err) {
        console.error(err);
      }

      console.log("title:", title);
      console.log("description:", description);
    }
  };

  useEffect(() => {
    if (title && description) setIsDisabled(false);
  }, [title, description]);

  return (
    <Container>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Create a new note
      </Typography>

      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        data-testid="form"
      >
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          inputProps={{ "data-testid": "title" }}
          error={titleError}
        />
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          className={classes.field}
          label="Description"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          inputProps={{ "data-testid": "description" }}
          error={descriptionError}
        />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          disabled={isDisabled}
          data-testid="submit-button"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
