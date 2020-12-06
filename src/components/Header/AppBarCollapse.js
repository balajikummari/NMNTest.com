import React from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Typography,
  IconButton,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import useDarkMode from "use-dark-mode";
import Avatar from "@material-ui/core/Avatar";
import Link from "next/link";
import { useUser } from "../../../lib/hooks";

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
});

const AppBarCollapse = (props) => {
  const darkMode = useDarkMode();
  const user = useUser();

  return <Box className={props.classes.root}></Box>;
};

export default withStyles(styles)(AppBarCollapse);
