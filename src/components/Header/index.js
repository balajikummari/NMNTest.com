import { Avatar, Box, Button, Hidden, IconButton, Link, Paper } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import AppBarCollapse from "./AppBarCollapse";
import useDarkMode from 'use-dark-mode';
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {},
  toggleDrawer: {},
  appTitle: {}
};

function Header(props) {
  const { classes } = props;
  const darkMode = useDarkMode();
  // console.log('darkMode.value in had : ',darkMode.value)

  return (
    <AppBar position="fixed" color='default' className={classes.navigation}>
      <Toolbar style={{ justifyContent: 'space-around' }} alignItems="center">
        <Box display='flex' style={{ marginRight: 'auto' }} alignItems="center">
          <Link as href='/' variant='inherit' underline="none">
            <Avatar aria-label="author" variant="square" style={{ margin: "0rem 1rem" }} src="/favicon/android-icon-192x192.png" />
          </Link>
          <Link variant='h6' href='/' underline="none" variant='inherit'>
            <Typography
              variant="h5"
              className={classes.appTitle}
              color='textPrimary'
            >

              <Box fontWeight={700}>
                NMNTest.com
          </Box>
            </Typography>
          </Link>
        </Box>
        <Hidden smUp >


          {/* <Button onClick={darkMode.toggle} style={{ marginRight: '3rem', fontSize: '1.2rem' }} >
            {darkMode.value ? '🌛' : '🌞'}
          </Button> */}


        </Hidden>
        {/* <Page /> */}

        <AppBarCollapse allTopics={props.allTopics} />
      </Toolbar>
    </AppBar>
  );
}


export default withStyles(styles)(Header);
