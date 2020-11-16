
import React from "react";
import { Box, Button, Grid, Link, MenuItem, Typography, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import useDarkMode from 'use-dark-mode';

const styles = theme => ({
  root: {
    position: "absolute",
    right: 0
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
  }
});

const AppBarCollapse = props => {
  const darkMode = useDarkMode();
  return (
    <Box className={props.classes.root} >
      <ButtonAppBarCollapse >
        <Box pl={2} pr={5} pt={3}>
          <MenuItem dense>
            <Typography variant="body1" color="initial"> About </Typography>
          </MenuItem>
          <MenuItem dense>
            <Typography variant="body1" color="initial"> Resources </Typography>
          </MenuItem>
          <MenuItem dense>
            <Typography variant="body1" color="initial"> Testing Services </Typography>
          </MenuItem>
          <MenuItem dense>
            <Typography variant="body1" color="initial"> Contact </Typography>
          </MenuItem>
        </Box>
      </ButtonAppBarCollapse>
      <Box display='flex' className={props.classes.buttonBar} id="appbar-collapse">
        {/* <Topics style={{ padding: '0.5rem 1rem' }} allTopics ={props.allTopics}/> */}
        <Button style={{ padding: '0.5rem 1rem' }} >
          <Typography variant='subtitle1'>
            <Box fontWeight={400} >
              About
            </Box>
          </Typography>
        </Button>
        <Button style={{ padding: '0.5rem 1rem' }} >
          <Typography variant='subtitle1'>
            <Box fontWeight={400} >
              Resources
            </Box>
          </Typography>
        </Button>
        <Button style={{ padding: '0.5rem 1rem' }} >
          <Typography variant='subtitle1'>
            <Box fontWeight={400} >
              Testing Services
            </Box>
          </Typography>
        </Button>
        <Button style={{ padding: '0.5rem 1rem' }} >
          <Typography variant='subtitle1'>
            <Box fontWeight={400} >
              Contact
            </Box>
          </Typography>
        </Button>


        <Button style={{ padding: '0.5rem 1rem' }} onClick={darkMode.toggle} >
          <Typography variant='body1'>
            {/* <Box fontWeight={400} >
              {darkMode.value ? '🌛' : '🌞'}
            </Box> */}
          </Typography>
        </Button>

      </Box>
    </Box>
  )
}

export default withStyles(styles)(AppBarCollapse);
