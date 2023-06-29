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

  return (
    <div>
      <header className="header d-flex justify-content-center">
        <div className="container">
          <h1 className="text-center">Items Management</h1>
        </div>
      </header>
      <div className="container">
        <div className="row flex-row">
          <div className="col-md-4 mt-5 border border-success rounded p-0">
            <ItemsList items={items} setSelectedItem={setSelectedItem} />
          </div>
          <div className="col-md-4 mt-5">
            <ItemDetails selectedItem={selectedItem} />
          </div>
          <div className="col-md-4 mt-5">
            {openForm && <AddItemForm addItem={addItem} />}
          </div>
          <div className="col-md-12 mt-5 text-center">
            <button className="btn btn-primary btn-lg w-25" onClick={handleClick}>
              Add New Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
