import React, { useState } from 'react';
import axios from 'axios';
import instantsearch from 'instantsearch.js';
import { menu } from 'instantsearch.js/es/widgets'


const Form = props => {
  console.log('form props', props)
  // State management
  const [carMaker, setCarMaker] = useState('')

  // Instant Search Widget
  const search = instantsearch({
    indexName: 'instant_search',
    searchClient: props.algolia
  })
  search.addWidget(menu({
    container: '#search-widget',
    attribute: 'make'
  }));
  search.start();

  // Form handler
  const handleSubmit = event => {
    event.preventDefault();
    // axios.get(`http://localhost:3600/cars/1`).then(resp => {
    //   props.onSubmit(resp.data); // pass data to outside
    //   setCarMaker(''); // reset form
    // })
    // console.log('handleSubmit')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="m"
        autoFocus
        value={carMaker}
        onChange={event => setCarMaker(event.target.value)}
        // placeholder="Car maker"
        required
      />
      <label htmlFor="m" className="name">
        <span className="label-text">Search</span>
      </label>
      <input type="submit" value="Search" className="button"/>
    </form>
  )
}

export default Form;