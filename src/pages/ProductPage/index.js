
import { makeStyles, Box, Typography, Grid, Paper, Card, Link, Button } from "@material-ui/core";
import Layout from "../../components/layout";
import styles from "./style";
import Image from 'next/image'
import CircularProgressWithLabel from "../../components/CircularProgressWithLabel";
import LinearProgress from '@material-ui/core/LinearProgress';
import IframeResizer from 'iframe-resizer-react'
import Iframe from 'react-iframe'

const useStyles = makeStyles(styles);

const RenderProductPage = (props) => {
  const classes = useStyles();

  return (
    <div >
      <Layout>
        <Grid container spacing={4} display="flex" style={{ height: '93vh', width: '100vw', justifyContent: 'center' }}>
          <Grid item display='flex' style={{ alignSelf: 'center', height: '50vh'}} >
              <Card style={{ width: '100%', padding:'1rem 2rem' , height: '50vh', display: 'flex', flexDirection:'column', justifyContent: "center", alignItems: "center" }} >
                  <Image
                    src="https://images-na.ssl-images-amazon.com/images/I/61n%2BvpewuEL._AC_SX425_.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                  /> 
                  <Button variant = 'outlined' style={{margin:'1rem 0rem'}} >
                    Buy Now
                  </Button>
              </Card>
          </Grid>
          <Grid item  display='flex' style={{ alignSelf: 'center', height: '50vh' }} >
              <Card style={{ width: '100%', height: '50vh', display: 'flex', flexDirection:'column', justifyContent: "center", alignItems: "center" }} >
              <CircularProgressWithLabel  value={50} text ='C' />


            <Box style={{padding:'0rem 1rem '}}>
              <Typography variant="subtitle" component="div" color="textSecondary" style={{width:'100%'}}>
              Accuracy
             </Typography>
              <Box display ='flex' alignItems='center' style={{width:'100%'}}>
                <LinearProgress variant="determinate" value={50} style={{width:'200px'}} /> 
                <Typography variant="body1" component="div" color="textSecondary" style={{paddingLeft:'1rem'}}>
               C
             </Typography>
              </Box>
            </Box>

            <Box style={{padding:'0rem 1rem'}}>
              <Typography variant="subtitle" component="div" color="textSecondary" style={{width:'100%'}}>
              Safety
             </Typography>
              <Box display ='flex' alignItems='center' style={{width:'100%'}}>
                <LinearProgress variant="determinate" value={50} style={{width:'200px'}} /> 
                <Typography variant="body1" component="div" color="textSecondary" style={{paddingLeft:'1rem'}}>
               C
             </Typography>
              </Box>
            </Box>

            <Box style={{padding:'0rem 1rem'}}>
              <Typography variant="subtitle" component="div" color="textSecondary" style={{width:'100%'}}>
              Efficacy
             </Typography>
              <Box display ='flex' alignItems='center' style={{width:'100%'}}>
                <LinearProgress variant="determinate" value={50} style={{width:'200px'}} /> 
                <Typography variant="body1" component="div" color="textSecondary" style={{paddingLeft:'1rem'}}>
               C
             </Typography>
              </Box>
            </Box>
            
            <Box style={{padding:'0rem 1rem'}}>
              <Typography variant="subtitle" component="div" color="textSecondary" style={{width:'100%'}}>
              NMN Content
             </Typography>
              <Box display ='flex' alignItems='center' style={{width:'100%'}}>
                <LinearProgress variant="determinate" value={50} style={{width:'200px'}} /> 
                <Typography variant="body1" component="div" color="textSecondary" style={{paddingLeft:'1rem'}}>
               C
             </Typography>
              </Box>
            </Box>

            <Box style={{padding:'0rem 1rem'}}>
              <Typography variant="subtitle" component="div" color="textSecondary" style={{width:'100%'}}>
             value
             </Typography>
              <Box display ='flex' alignItems='center' style={{width:'100%'}}>
                <LinearProgress variant="determinate" value={50} style={{width:'200px'}} /> 
                <Typography variant="body1" component="div" color="textSecondary" style={{paddingLeft:'1rem'}}>
               C
             </Typography>
              </Box>
            </Box>

              </Card>
          </Grid>



          <Grid item  display='flex' style={{ alignSelf: 'center', height: '50vh' }} >
              <Card style={{ width: '100%', height: '50vh', display: 'flex', flexDirection:'column', justifyContent: "center", alignItems: "center" }} >
              
              <Image
                    src="https://hippevoshop.com/wp-content/uploads/2019/09/ResveraCel-ingredients.png"
                    alt="Picture of the author"
                    width={250}
                    height={300}
                  /> 
              </Card>
          </Grid>


        </Grid>
        <Box>
        {/* <IframeResizer
  log
  src="http://anotherdomain.com/iframe.html"
  style={{ width: '1px', minWidth: '100%'}}
/> */}
        <Iframe url="https://nmn.headlesswp.tech/product/wordpress-pennant/#tab-reviews"
        width="100%"
        height="1000px"
        display="initial"
        position="relative"
        style={{ heigt:"700px", scrolling:"no"}}
        />
        </Box>
      </Layout>
    </div>
  );
}


export default RenderProductPage;