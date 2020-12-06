import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products(first: 100) {
      edges {
        node {
          id
          productId
          type
          link
          image {
            id
            altText
            sourceUrl
          }
          ... on SimpleProduct {
            id
            name
            price
          }
          ... on VariableProduct {
            id
            name
            price
          }
          ... on ExternalProduct {
            id
            name
            price
            externalUrl
          }
          ... on GroupProduct {
            id
            name
            products {
              nodes {
                ... on SimpleProduct {
                  id
                  name
                  price
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_PRODUCTS;
