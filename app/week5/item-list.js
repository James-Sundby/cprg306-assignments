"use client";

import { useState } from "react";
import Item from "./item.js";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let items = itemsData.slice();

  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name))}
  else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category))};

    return(
      <>
        <div>
          <label className="">Sort by: </label>
          <button 
            className={`${sortBy === 'name' ? 'bg-gray-400' : 'bg-gray-600'} border-2 border-gray-900 rounded p-2 text-white mx-2 w-28`}
            onClick={() => setSortBy("name")}>Name</button>
          <button 
            className={`${sortBy === 'category' ? 'bg-gray-400' : 'bg-gray-600'} border-2 border-gray-900 rounded p-2 text-white mx-2 w-28`}
            onClick={() => setSortBy("category")}>Category</button>
        </div>
        <ul>
            {items.map((item) => (
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
        </ul>
      </>
    )
}