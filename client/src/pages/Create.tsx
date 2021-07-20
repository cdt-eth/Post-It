import { ReactElement } from "react";
import { Typography, Button, Container } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const Create = (): ReactElement => {
  return (
    <Container>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Create a new note
      </Typography>

      <Button
        onClick={() => console.log("clicked!")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
