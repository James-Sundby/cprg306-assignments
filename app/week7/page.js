"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

import NavBar from "../nav-bar-2";

export default function Home() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleRemoveItem = (name) => {
    setItems(items.filter((i) => i.name !== name));
  };

  const handleItemSelect = (name) => {
    var cleanedName = name
      .split(",")[0]
      .replace(/[\uD800-\uDFFF]./g, "")
      .trim();
    cleanedName = cleanedName.toLowerCase();
    setSelectedItemName(cleanedName);
  };
  console.log(selectedItemName);

  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-4xl m-4 font-bold">Shopping List</h1>
        <div className="flex">
          <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList
              items={items}
              onDelete={handleRemoveItem}
              onItemSelect={handleItemSelect}
            />
          </div>
          <div>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </main>
    </>
  );
}
