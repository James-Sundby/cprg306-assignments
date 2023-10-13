"use client";

import { useState } from "react";
import ItemList from "./item-list"
import NewItem from "./new-item"
import itemsData from "./items.json"

import NavBar from "../nav-bar"

export default function Home() {
    const [items, setItems] = useState(
        itemsData.map((item) => ({
            ...item,
        }))
    );

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <>
            <NavBar />
            <main>
                <h1 className="text-4xl m-4 font-bold">Shopping List</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items}/>
            </main>
        </>     
    );
}
