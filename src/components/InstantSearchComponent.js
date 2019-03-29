import React, { Component } from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  Menu,
  connectHits,
  ClearRefinements,
  Panel,
  Stats,
  SearchBox,
  RangeInput,
  Pagination,
  RefinementList,
  Highlight
} from 'react-instantsearch-dom';

// Docs
// https://www.algolia.com/doc/api-reference/widgets/hits/react/

const InstantSearchComponent = props => {

  return (
    <div className="container">
      <InstantSearch searchClient={props.algolia} indexName="instant_search">
        <Stats />
        {/* Refinement List Widget */}
        <h2> Refinements </h2>
        <RefinementList
            attribute="make"
            limit={2}
            showMoreLimit={5}
            showMore={true}
          />

        {/* Search Panel */}
        <h2> Power </h2>
        <RangeInput attribute="power"/>

        <ClearRefinements />
        <div className="search-panel">
          <div className="search-panel__results">
            <h2> Search </h2>
            <SearchBox
              className="searchbox"
              translations={{
                placeholder: '',
              }}
            />
            <h2> Results </h2>
            <Hits hitComponent={Hit}/>

            <div className="pagination">
              <Pagination />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  )
};

function Hit(props) {
  return (
    <div>
      <p> <Highlight hit={props.hit} attribute="make" /> {props.hit.model}  </p>
    </div>

    // <article>
    //   <p>
    //   {props.hit.make}: {props.hit.model}
    //     {/* <code>{JSON.stringify(props.hit).slice(0, 100)}...</code> */}
    //   </p>
    // </article>
  );
}


Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default InstantSearchComponent;