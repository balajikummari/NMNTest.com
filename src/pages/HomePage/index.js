
import { makeStyles, Box, Typography, Grid, Paper, Card, Link } from "@material-ui/core";
import Layout from "../../components/layout";
import styles from "./style";

const useStyles = makeStyles(styles);

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <div >
      <Layout>
        <Grid container spacing={3} display="flex" style={{ height: '93vh', width: '100vw', justifyContent: 'center' }}>
          <Grid item xs={12} sm={4} display='flex' style={{ alignSelf: 'center', height: '50vh' }} >
            <Link as='/products' href='/products' color="inherit">
              <Card style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: "center", alignItems: "center" }} >
                <Typography>
                  Products
              </Typography>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} style={{ alignSelf: 'center', height: '50vh' }} >
            <Grid container spacing={3} display="flex" flexDirection="column">

              <Card style={{ width: '100%', height: '23vh', margin: '12px', display: 'flex', justifyContent: "center", alignItems: "center" }} >
                <Typography>
                  <Link as='/brands' href='/brands' color="inherit">
                    Brands
                    </Link>

                </Typography>
              </Card>
              <Card style={{ width: '100%', height: '23vh', margin: '12px', display: 'flex', justifyContent: "center", alignItems: "center" }} >
                <Typography>
                  <Link as='/suppliers' href='/suppliers' color="inherit">
                    Suppliers
                    </Link>
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}


export default HomePage;