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
    <div className="flex flex-col w-full max-w-lg sm:w-fill bg-gray-800 p-2 m-2 border-2 border-gray-900 rounded-lg justify-center">
      <h2 className="flex pb-2">Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col pb-2 mx-2">
          <input
            placeholder="Item Name"
            type="text"
            required
            onChange={handleNameChange}
            value={name}
            className="border-2 border-gray-900 rounded-lg p-2 text-black font-sans"
          />
        </div>
        <div className="flex justify-between pb-2">
          <input
            type="number"
            min="1"
            max="99"
            required
            onChange={handleQuantityChange}
            value={quantity}
            className="border-2 border-gray-900 rounded-lg p-2 text-black mx-2 w-28"
          />
          <select
            required
            onChange={handleCategoryChange}
            value={category}
            className="border-2 border-gray-900 rounded-lg p-2 text-black mx-2 w-56"
          >
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
          <button
            type="submit"
            className="bg-gray-600 border-2 border-gray-900 text-white rounded-lg p-2 mx-2 hover:bg-gray-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
