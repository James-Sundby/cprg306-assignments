"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = { name, quantity, category };
    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div className="flex max-w-lg mx-2 mb-2">
        <button
          className="flex-1 btn btn-primary"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add Item to List
        </button>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className=" bg-base-200 max-w-lg mx-2 mb-2 modal-box">
          <form className="card-body" onSubmit={handleSubmit} method="dialog">
            <input
              placeholder="Item Name"
              type="text"
              required
              onChange={handleNameChange}
              value={name}
              className="input input-bordered"
            />
            <div className="flex space-x-2">
              <input
                type="number"
                min="1"
                max="99"
                required
                onChange={handleQuantityChange}
                value={quantity}
                className="input input-bordered w-1/4"
              />
              <select
                required
                onChange={handleCategoryChange}
                value={category}
                className="select select-bordered flex-grow"
              >
                <option disabled>Select a Category</option>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button type="submit" className="btn btn-primary flex-1">
                Add Item
              </button>
              <button
                className="btn btn-primary flex-1"
                onClick={() => {
                  document.getElementById("my_modal_1").close();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
