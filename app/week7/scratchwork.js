"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

import NavBar from "../nav-bar-2";

export default function Home() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [shifted, setShifted] = useState(false);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleRemoveItem = (name) => {
    setItems(items.filter((i) => i.name !== name));
  };

  const handleItemSelect = (name) => {
    let cleanedName = name
      .split(",")[0]
      .replace(/[^a-zA-Z ]/g, "") // Remove non-alphabet characters
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };

  useEffect(() => {
    if (selectedItemName && !shifted) {
      setShifted(true);
    }
  }, [selectedItemName, shifted]);

  useEffect(() => {
    const handleOverflowChange = () => {
      const body = document.getElementById("carouselMAIN");
      body.style.overflowX = shifted ? "visible" : "scroll";
    };

    handleOverflowChange();

    // Cleanup function to reset overflow property
    return () => {
      const body = document.getElementById("carouselMAIN");
      body.style.overflowX = "scroll";
    };
  }, [shifted]);

  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-4xl m-4 font-bold ">Shopping List</h1>
        <div
          id="carouselMAIN"
          className={`carousel w-screen ${shifted ? "shifted" : ""}`}
        >
          <div className="carousel-item lg:max-wd-lg">
            <div className="carousel-content-wrapper w-screen lg:w-auto">
              <NewItem onAddItem={handleAddItem} />
              <ItemList
                items={items}
                onDelete={handleRemoveItem}
                onItemSelect={handleItemSelect}
              />
            </div>
          </div>
          <div className="carousel-item lg:max-wd-lg">
            <div className="carousel-content-wrapper w-screen lg:w-auto">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
