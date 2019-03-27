import React, { Component } from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';

const InstantSearchComponent = props => {
  return (
    <div>
    <header className="header">
      <h1 className="header-title">
        <a href="/">instantsearch-react-app</a>
      </h1>
      <p className="header-subtitle">
        using{' '}
        <a href="https://github.com/algolia/react-instantsearch">
          React InstantSearch
        </a>
      </p>
    </header>

    <div className="container">
      <InstantSearch searchClient={props.algolia} indexName="instant_search">
        <div className="search-panel">
          <div className="search-panel__results">
            <SearchBox
              className="searchbox"
              translations={{
                placeholder: '',
              }}
            />
            <Hits hitComponent={Hit} />

            <div className="pagination">
              <Pagination />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  </div>
  )
};

function Hit(props) {
  return (
    <article>
      <p>
        <code>{JSON.stringify(props.hit).slice(0, 100)}...</code>
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default InstantSearchComponent;