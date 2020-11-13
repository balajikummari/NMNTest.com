import React from "react";
import { isEmpty } from "lodash";
import styles from "./search.module.scss";
import ClientSearch from "../client-search";
// import bg from "../../../images/search-background.png";

const Search = (props) => {
  const { products, initialProducts, categories, category, engine } = props;

  const placeholderText = "Search...";

  return !isEmpty(props.products) ? (
    <div className="search-section py-5">
      {/* Search */}
      <ClientSearch
        products={products}
        initialProducts={initialProducts}
        categories={categories}
        category={category}
        engine={engine}
        placeholder={placeholderText}
      />
    </div>
  ) : (
      ""
    );
};

export default Search;
