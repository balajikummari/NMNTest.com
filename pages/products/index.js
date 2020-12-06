import client from "../../src/apollo/client";
import GET_PRODUCTS from "../../src/apollo/queries/getProducts";
import RenderProductsPage from "../../src/pages/ProductsPage";

export default function ProductsPage({ products }) {
  return <RenderProductsPage />;
}

export async function getServerSideProps(context) {
  const { data: ProductsData, errors } = await client.query({
    query: GET_PRODUCTS,
  });

  const products = ProductsData
    ? ProductsData?.products?.edges?.map(({ node: product }) => {
        return {
          id: product?.id || "",
          productId: product?.productId || "",
          type: product?.type || "",
          image: product?.image?.sourceUrl || "",
          name: product?.name || "",
          price: product?.price || "",
          externalUrl: product?.externalUrl || "",
          buttonText: product?.buttonText || "",
        };
      })
    : [];

  return {
    props: {
      products: products,
    }, // will be passed to the page component as props
  };
}
