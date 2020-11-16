import React from "react";
//import Link from "gatsby-link";
import AddToCartButton from "../cart/add-to-cart-button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { isEmpty } from "lodash";
import { Box, Typography, Paper } from "@material-ui/core";
// import AddToWishList from "../wishlist/add-to-wishlist";
import Rating from '@material-ui/lab/Rating';

const productImagePlaceholder = "https://via.placeholder.com/434";

const Product = (props) => {
  const { product } = props;

  const hasImagesSizes =
    !isEmpty(product.image) && !isEmpty(product.image.mediaDetails.sizes);
  const imgSrcUrl = hasImagesSizes
    ? product.image.mediaDetails.sizes[3].sourceUrl
    : "";
  const imgWidth = hasImagesSizes
    ? product.image.mediaDetails.sizes[3].width
    : 450;
  const imgHeight = hasImagesSizes
    ? product.image.mediaDetails.sizes[3].height
    : 450;

  return (
    // @TODO Need to handle Group products differently.

    <Paper style={{ display: 'flex', width: '100%' }}>
      <Box style={{
        display: "flex",
        alignItems: "center",
        padding: "0rem 0.2rem"
      }}>
        {!isEmpty(product.image) ? (

          <LazyLoadImage
            alt={product.image.altText ? product.image.altText : ""}
            height='200px'
            src={imgSrcUrl} // use normal <img> attributes as props
            width='auto'
            effect="blur"
          />
        ) : !isEmpty(productImagePlaceholder) ? (

          <LazyLoadImage
            alt="default"
            height="300px"
            src={productImagePlaceholder}
            width="auto"
            effect="blur"
          />

        ) : null}
      </Box>
      <Box display="flex" flexDirection='column' alignItems="center">
        <Typography variant='h6' style={{ padding: '0.7rem 0rem' }} >{product.name ? product.name : ""}</Typography>
        <Typography variant='h3' style={{ padding: '0.7rem 0rem' }} >B</Typography>
        <Rating defaultValue={2} />
        <Typography variant='subtitle1' style={{ padding: '0.7rem 0rem' }} >800 Reviews</Typography>

        {/* <Typography variant='h5' style={{ padding: '0.5rem 0rem' }}>{product.price}</Typography> */}
        {/* <AddToCartButton product={product} /> */}
        {/* <AddToWishList product={product} /> */}
      </Box>
    </Paper>

  );
};

export default Product;
