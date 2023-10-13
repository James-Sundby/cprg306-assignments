"use client";

import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const itemsData = [...items];

  // Adapted from provided Youtube video https://www.youtube.com/watch?v=s1XVfm5mIuU from Web Dev Simplified
  const groupedItems = items.reduce((group, item) => {
    const category = item.category
    if (group[category] == null) {
      group[category] = [];}
    group[category].push(item);
    group[category].sort((a, b) => a.name.localeCompare(b.name));
    return group;
    }, {});
  
  if (sortBy === "name") {
    itemsData.sort((a, b) => a.name.localeCompare(b.name))}
  else if (sortBy === "category") {
    itemsData.sort((a, b) => a.category.localeCompare(b.category))};
  
    return(
      <>

        <div className="flex flex-col w-full max-w-lg sm:w-fill bg-gray-800 p-2 m-2 border-2 border-gray-900 rounded-lg"> 
          <h2 className="flex pb-2">Sort by: </h2>
          <div className="flex">
            <button 
              className={`${sortBy === 'name' ? 'bg-gray-400' : 'bg-gray-600'} border-2 border-gray-900 rounded-lg p-2 text-white mx-2 w-28`}
              onClick={() => setSortBy("name")}>Name</button>
            <button 
              className={`${sortBy === 'category' ? 'bg-gray-400' : 'bg-gray-600'} border-2 border-gray-900 rounded-lg p-2 text-white mx-2 w-28`}
              onClick={() => setSortBy("category")}>Category</button>
            <button 
                className={`${sortBy === 'grouped' ? 'bg-gray-400' : 'bg-gray-600'} border-2 border-gray-900 rounded-lg p-2 text-white mx-2 w-56`}
                onClick={() => setSortBy("grouped")}>Grouped Categories</button>
          </div>
        </div>

        {(sortBy === 'name' || sortBy === 'category') && (
          <ul>
              {itemsData.map((item) => (
                  <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
              ))}
          </ul>
        )}

        {sortBy === 'grouped' && (
          <div>
            {Object.keys(groupedItems).sort().map((category) => (
            <div className="py-2" key={category}>
              <h3 className="capitalize font-bold pl-2">{category}</h3>
              <ul>
                {groupedItems[category].map((item) => (
                  <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
                ))}
              </ul>
            </div>
          ))}
          </div>
        )}
      </>
    )
}