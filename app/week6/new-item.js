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
    <div className="card bg-base-200 max-w-lg mx-2 mb-2">
      <form className="card-body" onSubmit={handleSubmit}>
        <input
          placeholder="Item Name"
          type="text"
          required
          onChange={handleNameChange}
          value={name}
          className="input input-bordered"
        />
        <div className="flex justify-between space-x-2">
          <input
            type="number"
            min="1"
            max="99"
            required
            onChange={handleQuantityChange}
            value={quantity}
            className="input input-bordered w-32"
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
        <div className="flex flex-col">
          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
