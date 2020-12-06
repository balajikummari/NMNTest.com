
import { makeStyles, Box, Typography, Grid, Paper, Card, Link, Button } from "@material-ui/core";
import Layout from "../../components/layout";
import styles from "./style";
import Iframe from 'react-iframe'

const useStyles = makeStyles(styles);

const RenderAccountPage = (props) => {
  const classes = useStyles();

  return (
    <div >
      <Layout>
      <Box mt={5}>
      <Iframe url="https://nmn.headlesswp.tech/my-account/"
        width="100%"
        height="700px"
        display="initial"
        position="relative"
        sandbox = "allow-forms"
        //style={{ heigt:"100vh", scrolling:"no"}}
        />
      </Box>
      </Layout>
    </div>
  );
}


export default RenderAccountPage;