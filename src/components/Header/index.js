import {
  Avatar,
  Box,
  Button,
  Hidden,
  IconButton,
  Link,
  Paper,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import AppBarCollapse from "./AppBarCollapse";
import useDarkMode from "use-dark-mode";
import { useUser } from "../../../lib/hooks";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navigation: {},
  toggleDrawer: {},
  appTitle: {},
}));

function Header(props) {
  const classes = useStyles();

  const user = useUser();
  return (
    <AppBar position="fixed" color="default" className={classes.navigation}>
      <Toolbar style={{ justifyContent: "space-around" }} alignItems="center">
        <Box display="flex" style={{ marginRight: "auto" }} alignItems="center">
          <Link as href="/" variant="inherit" underline="none"></Link>
          <Link variant="h6" href="/" underline="none" variant="inherit">
            <Typography
              variant="h5"
              className={classes.appTitle}
              color="textPrimary"
            >
              <Box fontWeight={700}>NMNTest.com</Box>
            </Typography>
          </Link>
        </Box>

        <Hidden mdDown>
          <Box display="flex" className={classes.buttonBar}>
            <Button style={{ padding: "0.5rem 1rem" }}>
              <Typography variant="subtitle1">
                <Box fontWeight={400}>About</Box>
              </Typography>
            </Button>
            <Button style={{ padding: "0.5rem 1rem" }}>
              <Typography variant="subtitle1">
                <Box fontWeight={400}>Resources</Box>
              </Typography>
            </Button>
            <Button style={{ padding: "0.5rem 1rem" }}>
              <Typography variant="subtitle1">
                <Box fontWeight={400}>Testing Services</Box>
              </Typography>
            </Button>
            <Button style={{ padding: "0.5rem 1rem" }}>
              <Typography variant="subtitle1">
                <Box fontWeight={400}>Contact</Box>
              </Typography>
            </Button>
            {user ? (
              <a href="/api/logout">
                <Button style={{ padding: "0rem 1rem", paddingTop: "0.8rem" }}>
                  <Typography variant="subtitle1">
                    <Box fontWeight={400}>Log Out</Box>
                  </Typography>
                </Button>
              </a>
            ) : (
              <div />
            )}
            <Button style={{ padding: "0.5rem 1rem" }}>
              <Link href="/profile">
                <Typography variant="body1">
                  <Avatar>{user?.username[0] || "?"}</Avatar>
                </Typography>
              </Link>
            </Button>
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
