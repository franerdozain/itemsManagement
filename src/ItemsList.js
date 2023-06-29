import React from 'react'

export default function ItemsList({ items, setSelectedItem }) {
    return (
      <>
        <ul className="list-group list-group-sm w-100">
          {items.map((item, index) => (
            <li className="list-group-item " key={index} onClick={() => setSelectedItem(item)}>{item.name} {item.price && <span>$ {item.price}</span>}</li>
          ))}
        </ul>
      </>
    );
  }