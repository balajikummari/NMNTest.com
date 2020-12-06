import RenderProductPage from "../../src/pages/ProductPage";

export default function BrandsPage(props) {
  return (
    <div>
      <RenderProductPage />
    </div>
  );
}
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
