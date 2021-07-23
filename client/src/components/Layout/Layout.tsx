import { ReactElement } from "react";
import { Drawer, makeStyles, Typography } from "@material-ui/core";

type Children = {
  children: JSX.Element;
};

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

const Layout = ({ children }: Children): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5">Post it!</Typography>
        </div>
      </Drawer>

      <div className={classes.page}>{children}</div>
    </div>
  );
};
export default Layout;
