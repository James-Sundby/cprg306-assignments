"use client";

import { useState } from "react";

export default function NewItem(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = { name, quantity, category };
        console.log(newItem);

        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name: </span>
                    <input 
                        type="text"
                        required 
                        onChange={handleNameChange} 
                        value={name} 
                        className=""
                    />
                </label>
                <label>
                    <span>Quantity: </span>
                    <input 
                        type="number"
                        min="1"
                        max="99"
                        required 
                        onChange={handleQuantityChange} 
                        value={quantity} 
                        className=""
                    />
                </label>
                <label>
                    <span>Category: </span>
                    <select 
                        required 
                        onChange={handleCategoryChange} 
                        value={category} 
                        className=""
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
                </label>
                <button 
                    type="submit"
                    className="">
                    Add Item
                </button>
            </form>
        </div>
    );
}



/* Github copilot generated code suggestions
    export default function NewItem({ onAdd }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd({ name, quantity, category });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-2xl m-4">Add New Item</h1>
            <div className="flex flex-col m-4">
                <label className="text-xl">Name</label>
                <input
                    className="border-2 border-gray-900 rounded p-2"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="flex flex-col m-4">
                <label className="text-xl">Quantity</label>
                <input
                    className="border-2 border-gray-900 rounded p-2"
                    type="number"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                />
            </div>
            <div className="flex flex-col m-4">
                <label className="text-xl">Category</label>
                <input
                    className="border-2 border-gray-900 rounded p-2"
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
            </div>
            <div className="flex flex-col m-4">
                <button className="bg-gray-900 text-white rounded p-2" type="submit">
                    Add Item
                </button>
            </div>
        </form>
    );
}*/