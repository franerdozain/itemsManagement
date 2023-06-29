import { useState } from 'react';
import './App.css';
import ItemsList from './ItemsList';
import AddItemForm from './AddItemForm';
import ItemDetails from './ItemDetails';

function App() {
  // set an initial items array for testing purposes
  const [items, setItems] = useState([
    {
      name: "Pera",
      price: 2.50,
      imageUrl: "https://cdn.pixabay.com/photo/2015/05/07/12/17/pear-756388_640.jpg"
    },
    {
      name: "Apple",
      price: 1.26,
      imageUrl: "https://cdn.pixabay.com/photo/2016/11/18/13/47/apple-1834639_640.jpg"
    }
  ]);
  const [selectedItem, setSelectedItem] = useState(null)
  const [openForm, setOpenForm] = useState(false)

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleClick = () => {
    setOpenForm(true)
  }

  console.log(items);
  return (
    <div>
      <ItemsList items={items} setSelectedItem={setSelectedItem} />
      <button onClick={handleClick}>Add New Item</button>
      <ItemDetails selectedItem={selectedItem} />
      {openForm && <AddItemForm addItem={addItem} />}
    </div>
  );
}

export default App;
