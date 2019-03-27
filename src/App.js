import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch/lite';

import Form from './components/Form';
import ItemsList from './components/ItemsList';
import InstantSearchComponent from './components/InstantSearchComponent';

// import logo from './logo.svg';
import './App.css';

const App = () => {
  // Context variables
  const [items, setItems] = useState([]);
  const algolia = algoliasearch('CYDENZIZOU', '9e8619030b589f42712faa73322707c2');
  const index = algolia.initIndex('instant_search');

  // We only want to fetch data when the component mounts.
  useEffect(() => {
    const fetchHits = async() => {
      const { hits } = await index.search('');
      console.log('got hits', hits);
      setItems(hits);
    };
    fetchHits();
  }, []);

  const addNewItem = cardInfo => {
    setItems(items.concat(cardInfo)) // do not mutate state
  }

  return (
    <div>
      <h2>Insant Search by Algolia</h2>
      <InstantSearchComponent algolia={algolia}> </InstantSearchComponent>
      <Form onSubmit={addNewItem} algolia={algolia}/>
      <ItemsList items={items} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload...
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
