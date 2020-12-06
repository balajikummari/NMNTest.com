import {
  makeStyles,
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  Link,
  Button,
} from "@material-ui/core";
import Layout from "../../components/layout";
import styles from "./style";
import Image from "next/image";
import CircularProgressWithLabel from "../../components/CircularProgressWithLabel";
import LinearProgress from "@material-ui/core/LinearProgress";
import IframeResizer from "iframe-resizer-react";
import Iframe from "react-iframe";
import { useRouter } from "next/router";
import { productsData } from "../../productsData";
import slugify from "slugify";

const useStyles = makeStyles(styles);

const RenderProductPage = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const matchedProduct = productsData.filter(
    (Product) => slugify(Product.Product) === slug
  )[0];
  const Alphabet = "EDCBA";
  return (
    <div>
      <Layout>
        <Grid
          container
          spacing={4}
          display="flex"
          style={{ height: "93vh", width: "100vw", justifyContent: "center" }}
        >
          <Grid
            item
            display="flex"
            style={{ alignSelf: "center", height: "60vh" }}
          >
            <Card
              style={{
                width: "100%",
                padding: "1rem 2rem",
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={matchedProduct?.ImageLink || "#"}
                alt="Picture of the author"
                width={250}
                height={250}
              />
              <Typography variant="h6" style={{ padding: "0.2rem 0rem" }}>
                {matchedProduct.Product ? matchedProduct.Product : ""}
              </Typography>
              <Typography variant="body2" style={{ padding: "0rem 0rem" }}>
                {`${matchedProduct.Company}`} - {`USD ${matchedProduct.Price}`}
              </Typography>
              <a
                href={matchedProduct.BuyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" style={{ margin: "1rem 0rem" }}>
                  Buy Now
                </Button>
              </a>
            </Card>
          </Grid>
          <Grid
            item
            display="flex"
            style={{ alignSelf: "center", height: "60vh" }}
          >
            <Card
              style={{
                width: "100%",
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgressWithLabel
                value={matchedProduct.overall * 20}
                text={Alphabet[Math.round(matchedProduct.overall)]}
              />
              <Box py={2}>
                <Typography variant="body2" style={{ padding: "0rem 0rem" }}>
                  {`Reported NMN Content : ${matchedProduct.ReportedNMN}`}
                </Typography>
              </Box>
              <Box style={{ padding: "0rem 1rem " }}>
                <Typography
                  variant="subtitle"
                  component="div"
                  color="textSecondary"
                  style={{ width: "100%" }}
                >
                  Accuracy
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ width: "100%" }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={matchedProduct.Accuracy * 20}
                    style={{ width: "200px" }}
                  />
                  <Typography
                    variant="body1"
                    component="div"
                    color="textSecondary"
                    style={{ paddingLeft: "1rem" }}
                  >
                    {Alphabet[Math.round(matchedProduct.Accuracy)]}
                  </Typography>
                </Box>
              </Box>

              <Box style={{ padding: "0rem 1rem" }}>
                <Typography
                  variant="subtitle"
                  component="div"
                  color="textSecondary"
                  style={{ width: "100%" }}
                >
                  Safety
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ width: "100%" }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={matchedProduct.Safety * 20}
                    style={{ width: "200px" }}
                  />
                  <Typography
                    variant="body1"
                    component="div"
                    color="textSecondary"
                    style={{ paddingLeft: "1rem" }}
                  >
                    {Alphabet[Math.round(matchedProduct.Safety)]}
                  </Typography>
                </Box>
              </Box>

              <Box style={{ padding: "0rem 1rem" }}>
                <Typography
                  variant="subtitle"
                  component="div"
                  color="textSecondary"
                  style={{ width: "100%" }}
                >
                  Efficacy
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ width: "100%" }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={matchedProduct.Efficacy * 20}
                    style={{ width: "200px" }}
                  />
                  <Typography
                    variant="body1"
                    component="div"
                    color="textSecondary"
                    style={{ paddingLeft: "1rem" }}
                  >
                    {Alphabet[Math.round(matchedProduct.Efficacy)]}
                  </Typography>
                </Box>
              </Box>

              <Box style={{ padding: "0rem 1rem" }}>
                <Typography
                  variant="subtitle"
                  component="div"
                  color="textSecondary"
                  style={{ width: "100%" }}
                >
                  NMN Content
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ width: "100%" }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={matchedProduct.NMNContent * 20}
                    style={{ width: "200px" }}
                  />
                  <Typography
                    variant="body1"
                    component="div"
                    color="textSecondary"
                    style={{ paddingLeft: "1rem" }}
                  >
                    {Alphabet[Math.round(matchedProduct.NMNContent)]}
                  </Typography>
                </Box>
              </Box>

              <Box style={{ padding: "0rem 1rem" }}>
                <Typography
                  variant="subtitle"
                  component="div"
                  color="textSecondary"
                  style={{ width: "100%" }}
                >
                  value
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ width: "100%" }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={matchedProduct.Value * 20}
                    style={{ width: "200px" }}
                  />
                  <Typography
                    variant="body1"
                    component="div"
                    color="textSecondary"
                    style={{ paddingLeft: "1rem" }}
                  >
                    {Alphabet[Math.round(matchedProduct.Value)]}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>

          <Grid
            item
            display="flex"
            style={{ alignSelf: "center", height: "60vh" }}
          >
            <Card
              style={{
                width: "100%",
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={matchedProduct.SuplimentImage}
                alt="Picture of the author"
                width={300}
                height={300}
              />
            </Card>
          </Grid>
        </Grid>
        <Box>
          <Iframe
            url="https://nmn.headlesswp.tech/product/wordpress-pennant/#tab-reviews"
            width="100%"
            height="1000px"
            display="initial"
            position="relative"
            style={{ heigt: "700px", scrolling: "no" }}
          />
        </Box>
      </Layout>
    </div>
  );
};

export default RenderProductPage;
