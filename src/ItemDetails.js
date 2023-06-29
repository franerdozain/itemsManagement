import React from "react";

export default function ItemDetails({ selectedItem }) {
    if(!selectedItem) {
        return null
    }

    return (
        <div className="col-6 col-md-3 w-100 border border-success rounded">
        <div className="card">
          {selectedItem.imageUrl && (
            <img
              src={selectedItem.imageUrl}
              className="card-img-top"
              alt={selectedItem.name}
            />
          )}
          <div className="card-body">
            <h5 className="card-title text-center">{selectedItem.name}</h5>
            <p className="card-text text-center">$ {selectedItem.price}</p>
          </div>
        </div>
      </div>
    );
}