import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/ItemList';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [items, setItems]= useState([]);
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItems(json));
  return (
    <div className="App">
      
      <header className="App-header">
        <Header />
        </header>
       <ItemList item ={items}/>
    </div>
  );
}

export default App;
/*
todo:
make navbar working
use searchbar to search items
 */
