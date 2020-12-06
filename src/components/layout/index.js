import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Box } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box pt={10} style={{ background: "#f2f3f8", minHeight: "100vh" }}>
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
