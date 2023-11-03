"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

import NavBar from "../components/nav-bar-2";

export default function Home() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleRemoveItem = (name) => {
    setItems(items.filter((i) => i.name !== name));
  };

  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-4xl m-4 font-bold">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onDelete={handleRemoveItem} />
      </main>
    </>
  );
}
