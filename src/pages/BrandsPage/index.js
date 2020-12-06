import Layout from "../../components/layout";
import { isEmpty } from "lodash";
import Search from "../../components/home/search";
import { Container, Box, Grid } from "@material-ui/core";
import Product from "../../components/product";
import { brandsData } from "../../brandsData";
import React from "react";

const RenderBrandsPage = (props) => {
  const [brands, setBrands] = React.useState(brandsData);

  const [searchTerm, setSearchterm] = React.useState();

  React.useEffect(() => {
    if (searchTerm) {
      const filtredItems = brandsData.filter((brand) =>
        brand.Company.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setBrands(filtredItems);
    } else {
      setBrands(brandsData);
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
          <h1>Brands</h1>
          <input
            name="productConsumed"
            placeholder="Search Brands"
            onChange={(event) => setSearchterm(event.target.value)}
          />

          <Grid container spacing={3}>
            {brands.map((product, i) => (
              <Grid item xs={12} sm={12} md={4}>
                <Product key={i} product={product} section="brand" />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default RenderBrandsPage;
