import { useState } from 'react';
import './App.css';
import ItemsList from './ItemsList';
import AddItemForm from './AddItemForm';
import ItemDetails from './ItemDetails';

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null)

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (  
    <div>
      <AddItemForm addItem={addItem} />
      <ItemsList items={items} setSelectedItem={setSelectedItem} />
      <ItemDetails selectedItem={selectedItem}/>
    </div>
  );
}

export default App;
