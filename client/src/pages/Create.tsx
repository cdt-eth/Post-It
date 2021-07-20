import { ReactElement } from "react";
import { makeStyles, Typography, Button, Container } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  btn: {
    // fontSize: 25,
    backgroundColor: "#00A5B6",
    transition: "0.3s",

    "&:hover": {
      backgroundColor: "#6EC1E4",
    },
  },
});

const Create = (): ReactElement => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Create a new note
      </Typography>

      <Button
        className={classes.btn}
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
