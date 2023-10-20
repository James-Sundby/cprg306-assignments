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
      .replace(/[^a-zA-Z ]/g, "") // Remove non-alphabet characters
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };
  console.log(selectedItemName);

  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-4xl m-4 font-bold">Shopping List</h1>
        <div className="carousel max-w-lg md:max-w-fit">
          <div className="carousel-item w-full lg:max-w-lg">
            <div className="carousel-content-wrapper">
              <NewItem onAddItem={handleAddItem} />
              <ItemList
                items={items}
                onDelete={handleRemoveItem}
                onItemSelect={handleItemSelect}
              />
            </div>
          </div>
          <div className="carousel-item max-w-lg md:max-w-fit">
            <div className="carousel-content-wrapper">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
