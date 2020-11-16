import React from "react";
import { isEmpty } from "lodash";
import { Box, Container } from "@material-ui/core";
//import Link from "gatsby-link";

const Categories = (props) => {
  // Here category contains data for is the current category ( e.g. if we are on that category archive page ).
  const { categories, category } = props;

  if (isEmpty(categories)) {
    return null;
  }

  return (
    <Container>
      <Box style={{
        boxShadow: "0 8px 8px -4px rgba(40,44,63,.04)",
        width: "100%",
        display: "flex",
        paddingBottom: "16px",
        marginTop: "24px"

      }} id="archive">
        {categories.nodes.length ? (
          <ul style={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "wrap",
            width: "100%"
          }}>
            <div
              style={{
                display: "inline-block",
                padding: "8px 16px",
                transition: ".3s",
                position: "relative",
                color: "#91969a",
                fontWeight: 700
              }}

              className={`categories-link ${"all" === category ? "active" : ""}`}
            // to="/#archive"
            >
              All
          </div>
            {categories.nodes.map((categoryItem) => (
              <div
                key={categoryItem.id}
                className={`categories-link ${
                  category.uri === categoryItem.uri ? "active" : ""
                  } `}
                //  to={`${categoryItem.uri}#archive`}
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  transition: ".3s",
                  position: "relative",
                  color: "#91969a",
                  fontWeight: 700,
                  '&:hover': {
                    color: '#555'
                  }
                }}
              >
                {categoryItem.name}
              </div>
            ))}
          </ul>
        ) : null}
      </Box>
    </Container>
  );
};

export default Categories;
