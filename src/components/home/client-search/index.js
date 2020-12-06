import React, { Component } from "react";
import * as JsSearch from "js-search";
import SearchResults from "../search-results";
import Categories from "../categories";
import SearchIcon from "../../icons/search-icon";
import { Box, makeStyles } from "@material-ui/core";

import styles from "./style";

const useStyles = makeStyles(styles);

class ClientSearch extends Component {
  state = {
    isLoading: true,
    searchResults: [],
    search: null,
    isError: false,
    indexByTitle: false,
    indexByCategory: false,
    termFrequency: true,
    removeStopWords: false,
    searchQuery: "",
    selectedStrategy: "",
    selectedSanitizer: "",
  };

  /**
   * React lifecycle method that will inject the data into the state.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.search === null) {
      const { engine } = nextProps;

      return {
        indexByTitle: engine.TitleIndex,
        indexByCategory: engine.CategoryIndex,
        termFrequency: engine.SearchByTerm,
        selectedSanitizer: engine.searchSanitizer,
        selectedStrategy: engine.indexStrategy,
      };
    }
    return null;
  }

  async componentDidMount() {
    this.rebuildIndex();
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const {
      selectedStrategy,
      selectedSanitizer,
      removeStopWords,
      termFrequency,
      indexByTitle,
      indexByCategory,
    } = this.state;

    const { products } = this.props;

    const dataToSearch = new JsSearch.Search("id");

    if (removeStopWords) {
      dataToSearch.tokenizer = new JsSearch.StopWordsTokenizer(
        dataToSearch.tokenizer
      );
    }

    /**
     * Defines an indexing strategy for the data
     * read more about it here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    if (selectedStrategy === "All") {
      dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    }
    if (selectedStrategy === "Exact match") {
      dataToSearch.indexStrategy = new JsSearch.ExactWordIndexStrategy();
    }
    if (selectedStrategy === "Prefix match") {
      dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    }

    /**
     * Defines the sanitizer for the search
     * to prevent some of the words from being excluded
     */
    selectedSanitizer === "Case Sensitive"
      ? (dataToSearch.sanitizer = new JsSearch.CaseSensitiveSanitizer())
      : (dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer());
    termFrequency === true
      ? (dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id"))
      : (dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex());

    // sets the index attribute for the data
    if (indexByTitle) {
      dataToSearch.addIndex("name");
    }

    if (indexByCategory) {
      dataToSearch.addIndex("categoriesData");
    }

    dataToSearch.addDocuments(products); // adds the data to be searched

    this.setState({ search: dataToSearch, isLoading: false });
  };

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = (e) => {
    const { search } = this.state;
    const queryResult = search.search(e.target.value);
    this.setState({ searchQuery: e.target.value, searchResults: queryResult });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { searchResults, searchQuery } = this.state;
    const { placeholder, categories, category, initialProducts } = this.props;

    const queryResults = searchResults;

    return (
      <>
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={this.handleSubmit}
            style={{
              background: "#f5f5f6",
              color: "rgba(0,0,0,.5)",
              width: "100%",
              maxWidth: "750px",
              background: "#f5f5f6",
              padding: "16px 28px",
              border: "none",
              borderRadius: "5px",
              fontSize: "20px",
              color: "#757575",
              boxShadow: "0 1rem 2rem rgba(0,0,0,.1)",
              display: "flex",
            }}
          >
            <input
              id="Search"
              className="search-input"
              value={searchQuery}
              onChange={this.searchData}
              placeholder={placeholder}
              autoComplete="on" // removes the autosearch suggestions
              style={{
                outline: "none",
                background: "#f5f5f6",
                color: "rgba(0,0,0,.5)",
                width: "100%",
                // maxWidth: "750px",
                background: "#f5f5f6",
                padding: "16px 28px",
                border: "none",
                borderRadius: "5px",
                fontSize: "20px",
                color: "#757575",
              }}
            />
            <SearchIcon />
          </form>
        </Box>
        {/* 
        <Categories categories={categories} category={category} /> */}
        <SearchResults
          queryResults={queryResults}
          initialProducts={initialProducts}
        />
      </>
    );
  }
}

export default ClientSearch;
