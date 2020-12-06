import Layout from "../../src/components/layout";
import { Container, Box, Grid } from "@material-ui/core";
import { brandsData } from "../../src/brandsData";
import Product from "../../src/components/product";
import { useRouter } from "next/router";
import slugify from "slugify";
import { productsData } from "../../src/productsData";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function BrandsPage(props) {
  const router = useRouter();
  const { slug } = router.query;

  const filterdProductsData = productsData.filter(
    (product) => slugify(product.Company) === slug
  );
  const [products, setProducts] = React.useState(filterdProductsData);

  const [searchTerm, setSearchterm] = React.useState();

  const brand = brandsData.filter(
    (brand) => slugify(brand.Company) === slug
  )[0];

  React.useEffect(() => {
    if (searchTerm) {
      const filtredItems = filterdProductsData.filter((product) =>
        product.Product.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filtredItems);
    } else {
      setProducts(filterdProductsData);
    }
  }, [searchTerm]);

  return (
    <div>
      <Layout>
        <style jsx>{`
          input {
            display: block;
            box-sizing: border-box;
            width: 100%;
            border-radius: 4px;
            border: 1px solid black;
            padding: 10px 15px;
            margin-bottom: 30px;
            font-size: 14px;
          }
        `}</style>
        <Container disableGutters>
          <Box px={6}>
            <LazyLoadImage
              alt="default"
              height="120px"
              src={brand.BrandLogo}
              width="auto"
              effect="blur"
            />
            <h1>{slug}</h1>
            <input
              name="productConsumed"
              placeholder="Search Products"
              onChange={(event) => setSearchterm(event.target.value)}
            />
            <Grid container spacing={3}>
              {products.map((product, i) => (
                <Grid item xs={12} sm={12} md={4}>
                  <Product key={i} product={product} section="product" />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
