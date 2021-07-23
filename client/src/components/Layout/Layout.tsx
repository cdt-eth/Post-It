import { makeStyles } from "@material-ui/core";
import { ReactElement } from "react";

type Children = {
  children: JSX.Element;
};

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
});

const Layout = ({ children }: Children): ReactElement => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.page}>{children}</div>
    </div>
  );
};
export default Layout;
