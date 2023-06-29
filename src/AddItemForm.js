import React, { useState } from "react";

export default function AddItemForm({ addItem }) {
  const [form, setForm] = useState({
    name: '',
    price: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(form); 
    setForm({ name: '', price: '', imageUrl: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="border border-success rounded d-flex flex-column align-items-center">
      <div className="mb-3 w-100">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3 w-100">
        <label htmlFor="price" className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={form.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3 w-100">
        <label htmlFor="imageUrl" className="form-label">URL Image</label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-75 ">Add</button>
    </form>
  );
}