import React from "react";
//import Link from "gatsby-link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { isEmpty } from "lodash";
import { Box, Typography, Paper, Link } from "@material-ui/core";
// import AddToWishList from "../wishlist/add-to-wishlist";
import Rating from "@material-ui/lab/Rating";
import slugify from "slugify";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  parentBox: {
    //color: "#607d8b",
    //background: "red",
    fontFamily: "Verdana, Geneva, sans-serif",
    fontSize: "14px",
    fontWeight: 400,

    //width: "300px",
    cursor: "pointer",
    padding: "1rem 0.3rem",
    margin: "0.5rem 0rem",
    borderRadius: "0px",
    boxShadow: "0 1px 3px 0 rgba(0,0,0,0.07)",
    backgroundColor: "#fff",
    "&:hover": {
      boxShadow: "0 6px 12px 0 rgba(0,0,0,0.15)",
    },
  },
}));

const Product = (props) => {
  const { product, section } = props;
  const Alphabet = "EDCBA";
  const classes = useStyles();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9, borderRadius: "100%" }}
      animate={{ scale: 1 }}
      transformTemplate={(props, transform) =>
        // Disable GPU acceleration to prevent blurry text
        transform.replace(" translateZ(0)", "")
      }
    >
      <Link
        // href={"/products/[slug]"}
        href={
          section === "product"
            ? `/products/${slugify(product.Product)}`
            : `/brands/${slugify(product.Company)}`
        }
        color="inherit"
        underline="none"
      >
        <Paper
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "space-around",
          }}
          square
          // elevation={1}
          className={classes.parentBox}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0rem 0.2rem",
              justifyContent: "space-around",
            }}
          >
            <LazyLoadImage
              alt="default"
              height="120px"
              src={
                section === "product" ? product.ImageLink : product.BrandLogo
              }
              width={section === "product" ? "auto" : "150px"}
              effect="blur"
            />
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" style={{ padding: "0.2rem 0rem" }}>
              {section === "product" ? product.Product : product.Company}
            </Typography>
            <Typography variant="h5" style={{ padding: "0.2rem 0rem" }}>
              {Alphabet[Math.round(product.overall)]}
            </Typography>
            <Rating defaultValue={product.overall} readOnly />
            <Typography variant="subtitle1" style={{ padding: "0.2rem 0rem" }}>
              {product.NoRatings} Reviews
            </Typography>

            {/* <Typography variant='h5' style={{ padding: '0.5rem 0rem' }}>{product.price}</Typography> */}
            {/* <AddToCartButton product={product} /> */}
            {/* <AddToWishList product={product} /> */}
          </Box>
        </Paper>
      </Link>
    </motion.div>
  );
};

export default Product;
