import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import client from "../../src/apollo/client";
import Layout from "../../src/components/layout";
import { Box, Paper, Typography, Container, Grid } from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Rating from "@material-ui/lab/Rating";
import dynamic from "next/dynamic";

export default function SuppliersPage(props) {
  const [selectedSupplier, setSupplier] = React.useState(suppliers[0]);
  const position = [51.505, -0.09];
  const DynamicMap = dynamic(() => import("./map"), { ssr: false });

  return (
    <div>
      <Layout>
        <Container disableGutters>
          <Box mt={10}>
            <Box px={5} mt={5}>
              <Box pl={35} pt={5}>
                <Box
                  style={{
                    height: "450px",
                    width: "100px",
                  }}
                >
                  <DynamicMap supplier={selectedSupplier} />
                </Box>
              </Box>
              <Box>
                <Grid container spacing={3}>
                  {suppliers.map((supplier) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        onClick={() => setSupplier(supplier)}
                      >
                        <Paper
                          style={{ display: "flex", width: "100%" }}
                          elevation={4}
                        >
                          <Box
                            style={{
                              display: "flex",
                              alignItems: "center",
                              padding: "0.2rem 0.2rem",
                            }}
                          >
                            <LazyLoadImage
                              alt={""}
                              height="140px"
                              width="230px"
                              src={supplier.imageUrl} // use normal <img> attributes as props
                              effect="blur"
                            />
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            pl={1}
                          >
                            <Box>
                              <Typography
                                variant="body1"
                                style={{ padding: "0.2rem 0rem" }}
                              >
                                {supplier.name}
                              </Typography>
                              <Typography
                                variant="h5"
                                style={{ padding: "0.7rem 0rem" }}
                              >
                                {supplier.rating}
                              </Typography>
                            </Box>
                            <Rating
                              defaultValue={supplier.rating}
                              precisio={0.1}
                              readOnly={true}
                            />
                            <Typography
                              variant="subtitle2"
                              style={{ padding: "0.0rem 0rem" }}
                            >{`${supplier.noOfReviews} Reviews`}</Typography>
                          </Box>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      </Layout>
    </div>
  );
}

const suppliers = [
  {
    name: "ABC Pharma",
    rating: "4.5",
    noOfReviews: "20",
    imageUrl:
      "https://facilityexecutive.com/wp-content/uploads/2017/11/PfizerChina.Big_.jpeg",
    latitue: 50.879,
    longitude: 4.69,
  },

  {
    name: "Zentach Pharma",
    rating: "3.7",
    noOfReviews: "42",
    imageUrl:
      "https://media.gettyimages.com/photos/large-modern-industrial-building-picture-id169997584?s=612x612",
    latitue: 50.5879,
    longitude: 4.69,
  },

  {
    name: "General Pharma",
    rating: "3.5",
    noOfReviews: "55",
    imageUrl:
      "https://media.bizj.us/view/img/5797821/agility-systems-plant*1200xx738-415-31-0.jpg",
    latitue: 50.79,
    longitude: 4.69,
  },

  {
    name: "Allied Pharma",
    rating: "4.1",
    noOfReviews: "42",
    imageUrl:
      "https://www.allied-group.com/pulsepro/data/img/gallery/News-15/allied_group_news15_04.jpg",
    latitue: 50.879,
    longitude: 4.69,
  },

  {
    name: "Modren Pharmacy",
    rating: "4.6",
    noOfReviews: "62",
    imageUrl:
      "https://static9.depositphotos.com/1001829/1085/i/600/depositphotos_10853259-stock-photo-warehouse-exterior.jpg",
    latitue: 51.879,
    longitude: 4.69,
  },
];
