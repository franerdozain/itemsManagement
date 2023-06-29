import React from 'react'
import AddItemForm from './AddItemForm'



export default function ItemsList({ items }) {
    return (
      <>
        <ul className="list-group list-group-sm w-25">
          {items.map((item, index) => (
            <li className="list-group-item" key={index}>{item.name} {item.price && <span>$ {item.price}</span>}</li>
          ))}
        </ul>
      </>
    );
  }