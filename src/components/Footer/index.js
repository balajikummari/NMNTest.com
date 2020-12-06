import { makeStyles, Box, Typography, Card } from "@material-ui/core";
import styles from "./style";

const useStyles = makeStyles(styles);

const Footer = (props) => {
  const classes = useStyles();
  return (
    <Card style={{ height: "10vh" }} style={{ bottom: 0, width: "100%" }}>
      <Box display="flex" justifyContent="center" p={2}>
        <footer>
          <small>&copy; Copyright 2020, NMNTest.com</small>{" "}
        </footer>
      </Box>
    </Card>
  );
};

export default Footer;
