import Layout from "../../components/layout";
import { isEmpty } from "lodash";
import { Container, Box, Grid } from "@material-ui/core";
import { productsData } from "../../productsData";
import Product from "../../components/product";
import React from "react";
const RenderProductsPage = (props) => {
  const [products, setProducts] = React.useState(productsData);

  const [searchTerm, setSearchterm] = React.useState();

  React.useEffect(() => {
    if (searchTerm) {
      const filtredItems = productsData.filter((product) =>
        product.Product.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filtredItems);
    } else {
      setProducts(productsData);
    }
  }, [searchTerm]);

  return (
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
          <h1>Products</h1>
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
  );
};

export default RenderProductsPage;
