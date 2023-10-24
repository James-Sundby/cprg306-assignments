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
  const [numberOfMeals, setNumberOfMeals] = useState(0);

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

  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-4xl m-4 font-bold ">Shopping List</h1>
        <div className="carousel w-screen">
          <div className="carousel-item lg:max-wd-lg">
            <div className="carousel-content-wrapper w-screen lg:w-auto">
              <NewItem onAddItem={handleAddItem} />
              <ItemList
                items={items}
                onDelete={handleRemoveItem}
                onItemSelect={handleItemSelect}
                numberOfMeals={numberOfMeals}
              />
            </div>
          </div>
          <div className="carousel-item lg:max-wd-lg">
            <div className="carousel-content-wrapper w-screen lg:w-auto">
              <MealIdeas
                ingredient={selectedItemName}
                updateNumberOfMeals={setNumberOfMeals}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
