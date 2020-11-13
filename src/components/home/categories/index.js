import React from "react";
import { isEmpty } from "lodash";
//import Link from "gatsby-link";
import styles from "./Categories.module.scss";

const Categories = (props) => {
  // Here category contains data for is the current category ( e.g. if we are on that category archive page ).
  const { categories, category } = props;

  if (isEmpty(categories)) {
    return null;
  }

  return (
    <div className="categories-list-wrap" id="archive">
      {categories.nodes.length ? (
        <ul className="categories-list">
          <div
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
            >
              {categoryItem.name}
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Categories;
