import Layout from "../../components/layout";
import { isEmpty } from "lodash";
import Search from "../../components/home/search";
import { Container, Box } from "@material-ui/core";

const RenderProductsPage = (props) => {
  const {
    page: { title, seo, uri },
    categories,
    categoryName,
    postSearchData: { products, options },
  } = pageContext;

  return (
    <Layout>
      {!isEmpty(pageContext) ? (
        <>
          {/* <SEO
                            title={title}
                            seoData={seo}
                            uri={uri}
                            header={{ siteTitle: ' NMN Test' }}
                            openGraphImage={getOgImage(seo)}
                        />
                        <Carousel categories={categories} /> */}
          <Container>
            <Box mt={15}>
              <Search
                products={products}
                initialProducts={products}
                engine={options}
                category={categoryName}
                categories={categories}
                isfor="Products"
              />
            </Box>
          </Container>
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  );
};

export default RenderProductsPage;

const pageContext = {
  page: {
    id: "cG9zdDozNg==",
    title: "HOME",
    uri: "/",
    seo: {
      canonical: "https://nmn.headlesswp.tech/",
      title: "HOME - NMN",
      metaDesc: "",
      focuskw: "",
      metaRobotsNoindex: "index",
      metaRobotsNofollow: "follow",
      opengraphAuthor: "",
      opengraphDescription: "",
      opengraphTitle: "HOME - NMN",
      opengraphImage: {
        sourceUrl: "",
      },
      opengraphUrl: "https://nmn.headlesswp.tech/",
      opengraphSiteName: "NMN",
      opengraphPublishedTime: "",
      opengraphModifiedTime: "",
      twitterTitle: "",
      twitterDescription: "",
      twitterImage: {
        sourceUrl: "",
      },
    },
  },
  categories: {
    nodes: [
      {
        id: "dGVybTozNw==",
        name: "Bulk Powder",
        uri: "/product-category/bulk-powder/",
        description: null,
        image: null,
      },
      {
        id: "dGVybTozNQ==",
        name: "Capsules",
        uri: "/product-category/capsules/",
        description: null,
        image: null,
      },
      {
        id: "dGVybTozOQ==",
        name: "Face Masks",
        uri: "/product-category/face-masks/",
        description: null,
        image: null,
      },
      {
        id: "dGVybTozOA==",
        name: "Liposomal",
        uri: "/product-category/liposomal/",
        description: null,
        image: null,
      },
      {
        id: "dGVybTo1Mw==",
        name: "NR",
        uri: "/product-category/nr/",
        description: null,
        image: null,
      },
    ],
  },
  allProducts: [
    {
      id: "cHJvZHVjdDo0MDc=",
      productId: 407,
      nodeType: "SimpleProduct",
      link: "/product/hdmi-microwave/",
      description: "<p>Don&#8217;t jump!</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDo0MTg=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/11/product-1604429656-1567815438.png",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/11/product-1604429656-1567815438-300x300.png",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/11/product-1604429656-1567815438-150x150.png",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/11/product-1604429656-1567815438-450x450.png",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/11/product-1604429656-1567815438-450x450.png",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/11/product-1604429656-1567815438-450x450.png",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/11/product-1604429656-1567815438-450x450.png",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
        ],
      },
      name: "HDMI Microwave",
      price: "$16.64",
      seo: {
        canonical: "/product/hdmi-microwave/",
        title: "HDMI Microwave - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "Don&#8217;t jump!",
        opengraphTitle: "HDMI Microwave - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/11/product-1604429656-1567815438.png",
        },
        opengraphUrl: "/product/hdmi-microwave/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:10:57+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Bulk Powder"],
    },
    {
      id: "cHJvZHVjdDoxNDE=",
      productId: 141,
      nodeType: "ExternalProduct",
      link: "/product/wordpress-pennant/",
      description: "",
      image: {
        id: "cG9zdDoyNzQ=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1.jpg",
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
        ],
      },
      name: "WordPress Pennant",
      price: "$11.05",
      externalUrl:
        "https://mercantile.wordpress.org/product/wordpress-pennant/",
      categoriesData: ["Bulk Powder"],
    },
    {
      id: "cHJvZHVjdDoxMzg=",
      productId: 138,
      nodeType: "GroupProduct",
      link: "/product/logo-collection/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [
          {
            id: "cG9zdDoyNjI=",
            title: "beanie-with-logo-1.jpg",
            altText: "",
            mediaItemUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1.jpg",
          },
          {
            id: "cG9zdDoyNTY=",
            title: "t-shirt-with-logo-1.jpg",
            altText: "",
            mediaItemUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1.jpg",
          },
          {
            id: "cG9zdDoxNzg=",
            title: "hoodie-with-logo-2.jpg",
            altText: "",
            mediaItemUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2.jpg",
          },
        ],
      },
      image: {
        id: "cG9zdDoyNjg=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-150x150.jpg",
            },
            {
              height: "767",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-768x767.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-450x450.jpg",
            },
            {
              height: "599",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-600x599.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-450x450.jpg",
            },
            {
              height: "599",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-600x599.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
        ],
      },
      name: "Logo Collection",
      products: {
        nodes: [
          {
            id: "cHJvZHVjdDo4MQ==",
            name: "Beanie",
            price: "$18.00",
          },
          {
            id: "cHJvZHVjdDo3OA==",
            name: "T-Shirt",
            price: "$18.00",
          },
          {
            id: "cHJvZHVjdDo3NQ==",
            name: "Hoodie with Logo",
            price: "$45.00",
          },
        ],
      },
      seo: {
        canonical: "/product/logo-collection/",
        title: "Logo Collection - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a grouped product.",
        opengraphTitle: "Logo Collection - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1.jpg",
        },
        opengraphUrl: "/product/logo-collection/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:11:33+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Bulk Powder"],
    },
    {
      id: "cHJvZHVjdDoxMzU=",
      productId: 135,
      nodeType: "SimpleProduct",
      link: "/product/beanie-with-logo/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoyNjI=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
          {
            id: "dGVybTozNQ==",
            name: "Capsules",
          },
          {
            id: "dGVybTozOQ==",
            name: "Face Masks",
          },
        ],
      },
      name: "Beanie with Logo",
      price: "$18.00",
      seo: {
        canonical: "/product/beanie-with-logo/",
        title: "Beanie with Logo - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple product.",
        opengraphTitle: "Beanie with Logo - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1.jpg",
        },
        opengraphUrl: "/product/beanie-with-logo/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:01:24+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Bulk Powder", "Capsules", "Face Masks"],
    },
    {
      id: "cHJvZHVjdDoxMzI=",
      productId: 132,
      nodeType: "SimpleProduct",
      link: "/product/t-shirt-with-logo/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoyNTY=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNQ==",
            name: "Capsules",
          },
          {
            id: "dGVybTozOQ==",
            name: "Face Masks",
          },
          {
            id: "dGVybTozOA==",
            name: "Liposomal",
          },
        ],
      },
      name: "T-Shirt with Logo",
      price: "$18.00",
      seo: {
        canonical: "/product/t-shirt-with-logo/",
        title: "T-Shirt with Logo - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple product.",
        opengraphTitle: "T-Shirt with Logo - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1.jpg",
        },
        opengraphUrl: "/product/t-shirt-with-logo/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:01:34+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Capsules", "Face Masks", "Liposomal"],
    },
    {
      id: "cHJvZHVjdDoxMTE=",
      productId: 111,
      nodeType: "SimpleProduct",
      link: "/product/single/",
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoyMzQ=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozOQ==",
            name: "Face Masks",
          },
          {
            id: "dGVybTozOA==",
            name: "Liposomal",
          },
          {
            id: "dGVybTozNg==",
            name: "Sublingual",
          },
        ],
      },
      name: "Single",
      price: "$2.00",
      seo: {
        canonical: "/product/single/",
        title: "Single - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple, virtual product.",
        opengraphTitle: "Single - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1.jpg",
        },
        opengraphUrl: "/product/single/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:01:42+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Face Masks", "Liposomal", "Sublingual"],
    },
    {
      id: "cHJvZHVjdDoxMDc=",
      productId: 107,
      nodeType: "SimpleProduct",
      link: "/product/album/",
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoyMjg=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
          {
            id: "dGVybTozOA==",
            name: "Liposomal",
          },
          {
            id: "dGVybTozNg==",
            name: "Sublingual",
          },
        ],
      },
      name: "Album",
      price: "$15.00",
      seo: {
        canonical: "/product/album/",
        title: "Album - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple, virtual product.",
        opengraphTitle: "Album - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1.jpg",
        },
        opengraphUrl: "/product/album/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:01:52+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Bulk Powder", "Liposomal", "Sublingual"],
    },
    {
      id: "cHJvZHVjdDoxMDQ=",
      productId: 104,
      nodeType: "SimpleProduct",
      link: "/product/polo/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoyMjI=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-150x150.jpg",
            },
            {
              height: "767",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-768x767.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-450x450.jpg",
            },
            {
              height: "599",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-600x599.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-450x450.jpg",
            },
            {
              height: "599",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-600x599.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
          {
            id: "dGVybTozNQ==",
            name: "Capsules",
          },
          {
            id: "dGVybTozNg==",
            name: "Sublingual",
          },
        ],
      },
      name: "Polo",
      price: "$20.00",
      seo: {
        canonical: "/product/polo/",
        title: "Polo - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple product.",
        opengraphTitle: "Polo - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2.jpg",
        },
        opengraphUrl: "/product/polo/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:02:00+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Bulk Powder", "Capsules", "Sublingual"],
    },
    {
      id: "cHJvZHVjdDoxMDE=",
      productId: 101,
      nodeType: "SimpleProduct",
      link: "/product/long-sleeve-tee/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoyMTY=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
          {
            id: "dGVybTozNQ==",
            name: "Capsules",
          },
          {
            id: "dGVybTozOQ==",
            name: "Face Masks",
          },
        ],
      },
      name: "Long Sleeve Tee",
      price: "$25.00",
      seo: {
        canonical: "/product/long-sleeve-tee/",
        title: "Long Sleeve Tee - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple product.",
        opengraphTitle: "Long Sleeve Tee - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2.jpg",
        },
        opengraphUrl: "/product/long-sleeve-tee/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:02:08+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Bulk Powder", "Capsules", "Face Masks"],
    },
    {
      id: "cHJvZHVjdDo5OA==",
      productId: 98,
      nodeType: "SimpleProduct",
      link: "/product/hoodie-with-zipper/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoyMTA=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNQ==",
            name: "Capsules",
          },
          {
            id: "dGVybTozOQ==",
            name: "Face Masks",
          },
          {
            id: "dGVybTozOA==",
            name: "Liposomal",
          },
        ],
      },
      name: "Hoodie with Zipper",
      price: "$45.00",
      seo: {
        canonical: "/product/hoodie-with-zipper/",
        title: "Hoodie with Zipper - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple product.",
        opengraphTitle: "Hoodie with Zipper - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2.jpg",
        },
        opengraphUrl: "/product/hoodie-with-zipper/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:02:15+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Capsules", "Face Masks", "Liposomal"],
    },
    {
      id: "cHJvZHVjdDo5Mg==",
      productId: 92,
      nodeType: "SimpleProduct",
      link: "/product/sunglasses/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoyMDA=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
          {
            id: "dGVybTozOA==",
            name: "Liposomal",
          },
          {
            id: "dGVybTozNg==",
            name: "Sublingual",
          },
        ],
      },
      name: "Sunglasses",
      price: "$90.00",
      seo: {
        canonical: "/product/sunglasses/",
        title: "Sunglasses - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple product.",
        opengraphTitle: "Sunglasses - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2.jpg",
        },
        opengraphUrl: "/product/sunglasses/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:02:34+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Bulk Powder", "Liposomal", "Sublingual"],
    },
    {
      id: "cHJvZHVjdDo4OQ==",
      productId: 89,
      nodeType: "SimpleProduct",
      link: "/product/cap/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoxOTU=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
          {
            id: "dGVybTozNQ==",
            name: "Capsules",
          },
          {
            id: "dGVybTozNg==",
            name: "Sublingual",
          },
        ],
      },
      name: "Cap",
      price: "$16.00",
      seo: {
        canonical: "/product/cap/",
        title: "Cap - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple product.",
        opengraphTitle: "Cap - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2.jpg",
        },
        opengraphUrl: "/product/cap/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:02:41+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Bulk Powder", "Capsules", "Sublingual"],
    },
    {
      id: "cHJvZHVjdDo4Ng==",
      productId: 86,
      nodeType: "SimpleProduct",
      link: "/product/belt/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoxOTE=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
          {
            id: "dGVybTozNQ==",
            name: "Capsules",
          },
          {
            id: "dGVybTozOQ==",
            name: "Face Masks",
          },
        ],
      },
      name: "Belt",
      price: "$55.00",
      seo: {
        canonical: "/product/belt/",
        title: "Belt - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple product.",
        opengraphTitle: "Belt - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2.jpg",
        },
        opengraphUrl: "/product/belt/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:02:49+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Bulk Powder", "Capsules", "Face Masks"],
    },
    {
      id: "cHJvZHVjdDo4MQ==",
      productId: 81,
      nodeType: "SimpleProduct",
      link: "/product/beanie/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoxODc=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNQ==",
            name: "Capsules",
          },
          {
            id: "dGVybTozOQ==",
            name: "Face Masks",
          },
          {
            id: "dGVybTozOA==",
            name: "Liposomal",
          },
        ],
      },
      name: "Beanie",
      price: "$18.00",
      seo: {
        canonical: "/product/beanie/",
        title: "Beanie - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple product.",
        opengraphTitle: "Beanie - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2.jpg",
        },
        opengraphUrl: "/product/beanie/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:02:57+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Capsules", "Face Masks", "Liposomal"],
    },
    {
      id: "cHJvZHVjdDo3OA==",
      productId: 78,
      nodeType: "SimpleProduct",
      link: "/product/t-shirt/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoxODI=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozOQ==",
            name: "Face Masks",
          },
          {
            id: "dGVybTozOA==",
            name: "Liposomal",
          },
          {
            id: "dGVybTozNg==",
            name: "Sublingual",
          },
        ],
      },
      name: "T-Shirt",
      price: "$18.00",
      seo: {
        canonical: "/product/t-shirt/",
        title: "T-Shirt - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple product.",
        opengraphTitle: "T-Shirt - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2.jpg",
        },
        opengraphUrl: "/product/t-shirt/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:03:06+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Face Masks", "Liposomal", "Sublingual"],
    },
    {
      id: "cHJvZHVjdDo3NQ==",
      productId: 75,
      nodeType: "SimpleProduct",
      link: "/product/hoodie-with-logo/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [],
      },
      image: {
        id: "cG9zdDoxNzg=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
          {
            id: "dGVybTozOA==",
            name: "Liposomal",
          },
          {
            id: "dGVybTozNg==",
            name: "Sublingual",
          },
        ],
      },
      name: "Hoodie with Logo",
      price: "$45.00",
      seo: {
        canonical: "/product/hoodie-with-logo/",
        title: "Hoodie with Logo - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a simple product.",
        opengraphTitle: "Hoodie with Logo - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2.jpg",
        },
        opengraphUrl: "/product/hoodie-with-logo/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:03:15+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Bulk Powder", "Liposomal", "Sublingual"],
    },
    {
      id: "cHJvZHVjdDo3MA==",
      productId: 70,
      nodeType: "VariableProduct",
      link: "/product/hoodie/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [
          {
            id: "cG9zdDoxNzg=",
            title: "hoodie-with-logo-2.jpg",
            altText: "",
            mediaItemUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2.jpg",
          },
          {
            id: "cG9zdDoxNzQ=",
            title: "hoodie-green-1.jpg",
            altText: "",
            mediaItemUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-green-1.jpg",
          },
          {
            id: "cG9zdDoxNzA=",
            title: "hoodie-blue-1.jpg",
            altText: "",
            mediaItemUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-blue-1.jpg",
          },
        ],
      },
      image: {
        id: "cG9zdDoxNjY=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-150x150.jpg",
            },
            {
              height: "768",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-768x768.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-450x450.jpg",
            },
            {
              height: "600",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-600x600.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
          {
            id: "dGVybTozNQ==",
            name: "Capsules",
          },
          {
            id: "dGVybTozOQ==",
            name: "Face Masks",
          },
        ],
      },
      name: "Hoodie",
      price: "$42.00 - $45.00",
      seo: {
        canonical: "/product/hoodie/",
        title: "Hoodie - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a variable product.",
        opengraphTitle: "Hoodie - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2.jpg",
        },
        opengraphUrl: "/product/hoodie/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:03:27+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Bulk Powder", "Capsules", "Face Masks"],
    },
    {
      id: "cHJvZHVjdDo2NA==",
      productId: 64,
      nodeType: "VariableProduct",
      link: "/product/v-neck-t-shirt/",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      galleryImages: {
        nodes: [
          {
            id: "cG9zdDoxNTY=",
            title: "vnech-tee-blue-1.jpg",
            altText: "",
            mediaItemUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vnech-tee-blue-1.jpg",
          },
          {
            id: "cG9zdDoxNTI=",
            title: "vnech-tee-green-1.jpg",
            altText: "",
            mediaItemUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vnech-tee-green-1.jpg",
          },
        ],
      },
      image: {
        id: "cG9zdDoxNDg=",
        altText: "",
        caption: null,
        sourceUrl:
          "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2.jpg",
        mediaDetails: {
          sizes: [
            {
              height: "300",
              width: "300",
              name: "medium",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-300x300.jpg",
            },
            {
              height: "150",
              width: "150",
              name: "thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-150x150.jpg",
            },
            {
              height: "767",
              width: "768",
              name: "medium_large",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-768x767.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "woocommerce_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-450x450.jpg",
            },
            {
              height: "599",
              width: "600",
              name: "woocommerce_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-600x599.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "woocommerce_gallery_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-100x100.jpg",
            },
            {
              height: "450",
              width: "450",
              name: "shop_catalog",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-450x450.jpg",
            },
            {
              height: "599",
              width: "600",
              name: "shop_single",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-600x599.jpg",
            },
            {
              height: "100",
              width: "100",
              name: "shop_thumbnail",
              sourceUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-100x100.jpg",
            },
          ],
        },
      },
      productCategories: {
        nodes: [
          {
            id: "dGVybTozNw==",
            name: "Bulk Powder",
          },
          {
            id: "dGVybTozOA==",
            name: "Liposomal",
          },
          {
            id: "dGVybTozNg==",
            name: "Sublingual",
          },
        ],
      },
      name: "V-Neck T-Shirt",
      price: "$15.00 - $20.00",
      seo: {
        canonical: "/product/v-neck-t-shirt/",
        title: "V-Neck T-Shirt - NMN",
        metaDesc: "",
        focuskw: "",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
        opengraphAuthor: "",
        opengraphDescription: "This is a variable product.",
        opengraphTitle: "V-Neck T-Shirt - NMN",
        opengraphImage: {
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2.jpg",
        },
        opengraphUrl: "/product/v-neck-t-shirt/",
        opengraphSiteName: "NMN",
        opengraphPublishedTime: "",
        opengraphModifiedTime: "2020-11-03T19:03:34+00:00",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: null,
      },
      categoriesData: ["Bulk Powder", "Liposomal", "Sublingual"],
    },
  ],
  categoryName: "all",
  postSearchData: {
    products: [
      {
        id: "cHJvZHVjdDo0MDc=",
        productId: 407,
        nodeType: "SimpleProduct",
        link: "/product/hdmi-microwave/",
        description: "<p>Don&#8217;t jump!</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDo0MTg=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/11/product-1604429656-1567815438.png",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
          ],
        },
        name: "HDMI Microwave",
        price: "$16.64",
        seo: {
          canonical: "/product/hdmi-microwave/",
          title: "HDMI Microwave - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "Don&#8217;t jump!",
          opengraphTitle: "HDMI Microwave - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/11/product-1604429656-1567815438.png",
          },
          opengraphUrl: "/product/hdmi-microwave/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:10:57+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder"],
      },
      {
        id: "cHJvZHVjdDoxNDE=",
        productId: 141,
        nodeType: "ExternalProduct",
        link: "/product/wordpress-pennant/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoyNzQ=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
          ],
        },
        name: "WordPress Pennant",
        price: "$11.05",
        externalUrl:
          "https://mercantile.wordpress.org/product/wordpress-pennant/",
        seo: {
          canonical: "/product/wordpress-pennant/",
          title: "WordPress Pennant - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is an external product.",
          opengraphTitle: "WordPress Pennant - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/pennant-1.jpg",
          },
          opengraphUrl: "/product/wordpress-pennant/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:11:14+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder"],
      },
      {
        id: "cHJvZHVjdDoxMzg=",
        productId: 138,
        nodeType: "GroupProduct",
        link: "/product/logo-collection/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [
            {
              id: "cG9zdDoyNjI=",
              title: "beanie-with-logo-1.jpg",
              altText: "",
              mediaItemUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1.jpg",
            },
            {
              id: "cG9zdDoyNTY=",
              title: "t-shirt-with-logo-1.jpg",
              altText: "",
              mediaItemUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1.jpg",
            },
            {
              id: "cG9zdDoxNzg=",
              title: "hoodie-with-logo-2.jpg",
              altText: "",
              mediaItemUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2.jpg",
            },
          ],
        },
        image: {
          id: "cG9zdDoyNjg=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-150x150.jpg",
              },
              {
                height: "767",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-768x767.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-450x450.jpg",
              },
              {
                height: "599",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-600x599.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-450x450.jpg",
              },
              {
                height: "599",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-600x599.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
          ],
        },
        name: "Logo Collection",
        products: {
          nodes: [
            {
              id: "cHJvZHVjdDo4MQ==",
              name: "Beanie",
              price: "$18.00",
            },
            {
              id: "cHJvZHVjdDo3OA==",
              name: "T-Shirt",
              price: "$18.00",
            },
            {
              id: "cHJvZHVjdDo3NQ==",
              name: "Hoodie with Logo",
              price: "$45.00",
            },
          ],
        },
        seo: {
          canonical: "/product/logo-collection/",
          title: "Logo Collection - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a grouped product.",
          opengraphTitle: "Logo Collection - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/logo-1.jpg",
          },
          opengraphUrl: "/product/logo-collection/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:11:33+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder"],
      },
      {
        id: "cHJvZHVjdDoxMzU=",
        productId: 135,
        nodeType: "SimpleProduct",
        link: "/product/beanie-with-logo/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoyNjI=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
            {
              id: "dGVybTozNQ==",
              name: "Capsules",
            },
            {
              id: "dGVybTozOQ==",
              name: "Face Masks",
            },
          ],
        },
        name: "Beanie with Logo",
        price: "$18.00",
        seo: {
          canonical: "/product/beanie-with-logo/",
          title: "Beanie with Logo - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple product.",
          opengraphTitle: "Beanie with Logo - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-with-logo-1.jpg",
          },
          opengraphUrl: "/product/beanie-with-logo/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:01:24+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder", "Capsules", "Face Masks"],
      },
      {
        id: "cHJvZHVjdDoxMzI=",
        productId: 132,
        nodeType: "SimpleProduct",
        link: "/product/t-shirt-with-logo/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoyNTY=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNQ==",
              name: "Capsules",
            },
            {
              id: "dGVybTozOQ==",
              name: "Face Masks",
            },
            {
              id: "dGVybTozOA==",
              name: "Liposomal",
            },
          ],
        },
        name: "T-Shirt with Logo",
        price: "$18.00",
        seo: {
          canonical: "/product/t-shirt-with-logo/",
          title: "T-Shirt with Logo - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple product.",
          opengraphTitle: "T-Shirt with Logo - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/t-shirt-with-logo-1.jpg",
          },
          opengraphUrl: "/product/t-shirt-with-logo/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:01:34+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Capsules", "Face Masks", "Liposomal"],
      },
      {
        id: "cHJvZHVjdDoxMTE=",
        productId: 111,
        nodeType: "SimpleProduct",
        link: "/product/single/",
        description:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoyMzQ=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozOQ==",
              name: "Face Masks",
            },
            {
              id: "dGVybTozOA==",
              name: "Liposomal",
            },
            {
              id: "dGVybTozNg==",
              name: "Sublingual",
            },
          ],
        },
        name: "Single",
        price: "$2.00",
        seo: {
          canonical: "/product/single/",
          title: "Single - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple, virtual product.",
          opengraphTitle: "Single - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/single-1.jpg",
          },
          opengraphUrl: "/product/single/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:01:42+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Face Masks", "Liposomal", "Sublingual"],
      },
      {
        id: "cHJvZHVjdDoxMDc=",
        productId: 107,
        nodeType: "SimpleProduct",
        link: "/product/album/",
        description:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoyMjg=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
            {
              id: "dGVybTozOA==",
              name: "Liposomal",
            },
            {
              id: "dGVybTozNg==",
              name: "Sublingual",
            },
          ],
        },
        name: "Album",
        price: "$15.00",
        seo: {
          canonical: "/product/album/",
          title: "Album - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple, virtual product.",
          opengraphTitle: "Album - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/album-1.jpg",
          },
          opengraphUrl: "/product/album/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:01:52+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder", "Liposomal", "Sublingual"],
      },
      {
        id: "cHJvZHVjdDoxMDQ=",
        productId: 104,
        nodeType: "SimpleProduct",
        link: "/product/polo/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoyMjI=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-150x150.jpg",
              },
              {
                height: "767",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-768x767.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-450x450.jpg",
              },
              {
                height: "599",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-600x599.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-450x450.jpg",
              },
              {
                height: "599",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-600x599.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
            {
              id: "dGVybTozNQ==",
              name: "Capsules",
            },
            {
              id: "dGVybTozNg==",
              name: "Sublingual",
            },
          ],
        },
        name: "Polo",
        price: "$20.00",
        seo: {
          canonical: "/product/polo/",
          title: "Polo - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple product.",
          opengraphTitle: "Polo - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/polo-2.jpg",
          },
          opengraphUrl: "/product/polo/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:02:00+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder", "Capsules", "Sublingual"],
      },
      {
        id: "cHJvZHVjdDoxMDE=",
        productId: 101,
        nodeType: "SimpleProduct",
        link: "/product/long-sleeve-tee/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoyMTY=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
            {
              id: "dGVybTozNQ==",
              name: "Capsules",
            },
            {
              id: "dGVybTozOQ==",
              name: "Face Masks",
            },
          ],
        },
        name: "Long Sleeve Tee",
        price: "$25.00",
        seo: {
          canonical: "/product/long-sleeve-tee/",
          title: "Long Sleeve Tee - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple product.",
          opengraphTitle: "Long Sleeve Tee - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/long-sleeve-tee-2.jpg",
          },
          opengraphUrl: "/product/long-sleeve-tee/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:02:08+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder", "Capsules", "Face Masks"],
      },
      {
        id: "cHJvZHVjdDo5OA==",
        productId: 98,
        nodeType: "SimpleProduct",
        link: "/product/hoodie-with-zipper/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoyMTA=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNQ==",
              name: "Capsules",
            },
            {
              id: "dGVybTozOQ==",
              name: "Face Masks",
            },
            {
              id: "dGVybTozOA==",
              name: "Liposomal",
            },
          ],
        },
        name: "Hoodie with Zipper",
        price: "$45.00",
        seo: {
          canonical: "/product/hoodie-with-zipper/",
          title: "Hoodie with Zipper - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple product.",
          opengraphTitle: "Hoodie with Zipper - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-zipper-2.jpg",
          },
          opengraphUrl: "/product/hoodie-with-zipper/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:02:15+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Capsules", "Face Masks", "Liposomal"],
      },
      {
        id: "cHJvZHVjdDo5Mg==",
        productId: 92,
        nodeType: "SimpleProduct",
        link: "/product/sunglasses/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoyMDA=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
            {
              id: "dGVybTozOA==",
              name: "Liposomal",
            },
            {
              id: "dGVybTozNg==",
              name: "Sublingual",
            },
          ],
        },
        name: "Sunglasses",
        price: "$90.00",
        seo: {
          canonical: "/product/sunglasses/",
          title: "Sunglasses - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple product.",
          opengraphTitle: "Sunglasses - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/sunglasses-2.jpg",
          },
          opengraphUrl: "/product/sunglasses/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:02:34+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder", "Liposomal", "Sublingual"],
      },
      {
        id: "cHJvZHVjdDo4OQ==",
        productId: 89,
        nodeType: "SimpleProduct",
        link: "/product/cap/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoxOTU=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
            {
              id: "dGVybTozNQ==",
              name: "Capsules",
            },
            {
              id: "dGVybTozNg==",
              name: "Sublingual",
            },
          ],
        },
        name: "Cap",
        price: "$16.00",
        seo: {
          canonical: "/product/cap/",
          title: "Cap - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple product.",
          opengraphTitle: "Cap - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/cap-2.jpg",
          },
          opengraphUrl: "/product/cap/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:02:41+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder", "Capsules", "Sublingual"],
      },
      {
        id: "cHJvZHVjdDo4Ng==",
        productId: 86,
        nodeType: "SimpleProduct",
        link: "/product/belt/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoxOTE=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
            {
              id: "dGVybTozNQ==",
              name: "Capsules",
            },
            {
              id: "dGVybTozOQ==",
              name: "Face Masks",
            },
          ],
        },
        name: "Belt",
        price: "$55.00",
        seo: {
          canonical: "/product/belt/",
          title: "Belt - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple product.",
          opengraphTitle: "Belt - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/belt-2.jpg",
          },
          opengraphUrl: "/product/belt/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:02:49+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder", "Capsules", "Face Masks"],
      },
      {
        id: "cHJvZHVjdDo4MQ==",
        productId: 81,
        nodeType: "SimpleProduct",
        link: "/product/beanie/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoxODc=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNQ==",
              name: "Capsules",
            },
            {
              id: "dGVybTozOQ==",
              name: "Face Masks",
            },
            {
              id: "dGVybTozOA==",
              name: "Liposomal",
            },
          ],
        },
        name: "Beanie",
        price: "$18.00",
        seo: {
          canonical: "/product/beanie/",
          title: "Beanie - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple product.",
          opengraphTitle: "Beanie - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/beanie-2.jpg",
          },
          opengraphUrl: "/product/beanie/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:02:57+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Capsules", "Face Masks", "Liposomal"],
      },
      {
        id: "cHJvZHVjdDo3OA==",
        productId: 78,
        nodeType: "SimpleProduct",
        link: "/product/t-shirt/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoxODI=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozOQ==",
              name: "Face Masks",
            },
            {
              id: "dGVybTozOA==",
              name: "Liposomal",
            },
            {
              id: "dGVybTozNg==",
              name: "Sublingual",
            },
          ],
        },
        name: "T-Shirt",
        price: "$18.00",
        seo: {
          canonical: "/product/t-shirt/",
          title: "T-Shirt - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple product.",
          opengraphTitle: "T-Shirt - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/tshirt-2.jpg",
          },
          opengraphUrl: "/product/t-shirt/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:03:06+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Face Masks", "Liposomal", "Sublingual"],
      },
      {
        id: "cHJvZHVjdDo3NQ==",
        productId: 75,
        nodeType: "SimpleProduct",
        link: "/product/hoodie-with-logo/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [],
        },
        image: {
          id: "cG9zdDoxNzg=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
            {
              id: "dGVybTozOA==",
              name: "Liposomal",
            },
            {
              id: "dGVybTozNg==",
              name: "Sublingual",
            },
          ],
        },
        name: "Hoodie with Logo",
        price: "$45.00",
        seo: {
          canonical: "/product/hoodie-with-logo/",
          title: "Hoodie with Logo - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a simple product.",
          opengraphTitle: "Hoodie with Logo - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2.jpg",
          },
          opengraphUrl: "/product/hoodie-with-logo/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:03:15+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder", "Liposomal", "Sublingual"],
      },
      {
        id: "cHJvZHVjdDo3MA==",
        productId: 70,
        nodeType: "VariableProduct",
        link: "/product/hoodie/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [
            {
              id: "cG9zdDoxNzg=",
              title: "hoodie-with-logo-2.jpg",
              altText: "",
              mediaItemUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-with-logo-2.jpg",
            },
            {
              id: "cG9zdDoxNzQ=",
              title: "hoodie-green-1.jpg",
              altText: "",
              mediaItemUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-green-1.jpg",
            },
            {
              id: "cG9zdDoxNzA=",
              title: "hoodie-blue-1.jpg",
              altText: "",
              mediaItemUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-blue-1.jpg",
            },
          ],
        },
        image: {
          id: "cG9zdDoxNjY=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-150x150.jpg",
              },
              {
                height: "768",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-768x768.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-450x450.jpg",
              },
              {
                height: "600",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-600x600.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
            {
              id: "dGVybTozNQ==",
              name: "Capsules",
            },
            {
              id: "dGVybTozOQ==",
              name: "Face Masks",
            },
          ],
        },
        name: "Hoodie",
        price: "$42.00 - $45.00",
        seo: {
          canonical: "/product/hoodie/",
          title: "Hoodie - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a variable product.",
          opengraphTitle: "Hoodie - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/hoodie-2.jpg",
          },
          opengraphUrl: "/product/hoodie/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:03:27+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder", "Capsules", "Face Masks"],
      },
      {
        id: "cHJvZHVjdDo2NA==",
        productId: 64,
        nodeType: "VariableProduct",
        link: "/product/v-neck-t-shirt/",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        galleryImages: {
          nodes: [
            {
              id: "cG9zdDoxNTY=",
              title: "vnech-tee-blue-1.jpg",
              altText: "",
              mediaItemUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vnech-tee-blue-1.jpg",
            },
            {
              id: "cG9zdDoxNTI=",
              title: "vnech-tee-green-1.jpg",
              altText: "",
              mediaItemUrl:
                "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vnech-tee-green-1.jpg",
            },
          ],
        },
        image: {
          id: "cG9zdDoxNDg=",
          altText: "",
          caption: null,
          sourceUrl:
            "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2.jpg",
          mediaDetails: {
            sizes: [
              {
                height: "300",
                width: "300",
                name: "medium",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-300x300.jpg",
              },
              {
                height: "150",
                width: "150",
                name: "thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-150x150.jpg",
              },
              {
                height: "767",
                width: "768",
                name: "medium_large",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-768x767.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "woocommerce_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-450x450.jpg",
              },
              {
                height: "599",
                width: "600",
                name: "woocommerce_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-600x599.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "woocommerce_gallery_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-100x100.jpg",
              },
              {
                height: "450",
                width: "450",
                name: "shop_catalog",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-450x450.jpg",
              },
              {
                height: "599",
                width: "600",
                name: "shop_single",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-600x599.jpg",
              },
              {
                height: "100",
                width: "100",
                name: "shop_thumbnail",
                sourceUrl:
                  "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2-100x100.jpg",
              },
            ],
          },
        },
        productCategories: {
          nodes: [
            {
              id: "dGVybTozNw==",
              name: "Bulk Powder",
            },
            {
              id: "dGVybTozOA==",
              name: "Liposomal",
            },
            {
              id: "dGVybTozNg==",
              name: "Sublingual",
            },
          ],
        },
        name: "V-Neck T-Shirt",
        price: "$15.00 - $20.00",
        seo: {
          canonical: "/product/v-neck-t-shirt/",
          title: "V-Neck T-Shirt - NMN",
          metaDesc: "",
          focuskw: "",
          metaRobotsNoindex: "index",
          metaRobotsNofollow: "follow",
          opengraphAuthor: "",
          opengraphDescription: "This is a variable product.",
          opengraphTitle: "V-Neck T-Shirt - NMN",
          opengraphImage: {
            sourceUrl:
              "https://nmn.headlesswp.tech/wp-content/uploads/2020/10/vneck-tee-2.jpg",
          },
          opengraphUrl: "/product/v-neck-t-shirt/",
          opengraphSiteName: "NMN",
          opengraphPublishedTime: "",
          opengraphModifiedTime: "2020-11-03T19:03:34+00:00",
          twitterTitle: "",
          twitterDescription: "",
          twitterImage: null,
        },
        categoriesData: ["Bulk Powder", "Liposomal", "Sublingual"],
      },
    ],
    options: {
      indexStrategy: "Prefix match",
      searchSanitizer: "Lower Case",
      TitleIndex: true,
      AuthorIndex: true,
      CategoryIndex: true,
      SearchByTerm: true,
    },
  },
};
