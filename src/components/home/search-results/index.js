import React from 'react';
import { isEmpty } from 'lodash';
import Products from "../products";

const SearchResults = ({ queryResults, initialProducts }) => {

	if (isEmpty(queryResults) && isEmpty(initialProducts)) {
		return null;
	}

	// If search results are not available show all initialProducts.
	const productsToBeDisplayed = !isEmpty(queryResults) ? queryResults : initialProducts;

	return (
		<div style={{ width: "100%", marginTop: "30px" }}>
			<Products products={productsToBeDisplayed} />
		</div>
	);
};

export default SearchResults;
