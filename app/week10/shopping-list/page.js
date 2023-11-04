"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import {
  getShoppingList,
  addItem,
  removeItem,
} from "../_services/shopping-list-service";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import Link from "next/link";

import NavBar from "../../components/nav-bar-2";

export default function Home() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = async (item) => {
    try {
      const newItemId = await addItem(user.uid, item);
      const newItem = { ...item, id: newItemId };
      setItems([...items, newItem]);
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  const handleRemoveItem = async (itemId, event) => {
    event.stopPropagation();
    try {
      await removeItem(user.uid, itemId);
      setItems(items.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error removing item: ", error);
    }
  };

  const handleItemSelect = (name) => {
    var cleanedName = name
      .split(",")[0]
      .replace(/[^a-zA-Z ]/g, "") // Remove non-alphabet characters
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };

  async function loadItems() {
    try {
      const items = await getShoppingList(user.uid);
      setItems(items);
    } catch (error) {
      console.error("Error retrieving shopping list: ", error);
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  return (
    <>
      <NavBar />
      <h1 className="text-4xl m-4 font-bold ">Shopping List</h1>
      {user ? (
        <main>
          <div className="carousel w-screen">
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
      ) : (
        <div className="card bg-base-200 shadow-xl max-w-lg mx-2 mb-2">
          <div className="card-body">
            <div>
              <h2 className="card-title text-2xl">Sorry</h2>
              <p>You must be logged in to access this page</p>
            </div>
            <div className="card-actions justify-center">
              <Link className="btn btn-primary btn-wide" href="/week8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="inline-block w-5 h-5 stroke-current fill-primary-content"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z" />
                </svg>
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
