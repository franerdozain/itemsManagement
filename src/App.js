import { useState } from 'react';
import './App.css';
import ItemsList from './ItemsList';
import AddItemForm from './AddItemForm';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (  
    <div>
      <AddItemForm addItem={addItem} />
      <ItemsList items={items} />
    </div>
  );
}

export default App;
