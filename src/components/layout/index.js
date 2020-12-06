import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Box } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box mt={10}>
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
