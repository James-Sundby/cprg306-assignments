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

        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

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
        <main className="flex justify-center">
            <div className = "flex flex-col w-full max-w-lg sm:w-fill bg-gray-600 p-2 m-2 rounded justify-center">
                <h1 className = "text-4xl text-center">Add New Item</h1>
                <form onSubmit = {handleSubmit}>
                    <div className = "flex flex-col m-4">
                        <label className="text-xl">Name: </label>
                        <input 
                            placeholder = "Item Name"
                            type = "text"
                            required 
                            onChange = {handleNameChange} 
                            value = {name} 
                            className ="border-2 border-gray-900 rounded p-2 text-black"
                        />
                    </div>
                    <div className = "flex justify-between ">
                        <div className = "flex flex-col m-4">
                            <label className = "text-xl">Quantity: </label>
                            <input 
                                type = "number"
                                min = "1"
                                max = "99"
                                required 
                                onChange = {handleQuantityChange} 
                                value = {quantity} 
                                className = "border-2 border-gray-900 rounded p-2 text-black"
                            />
                        </div>
                        <div className = "flex flex-col m-4">
                            <label className = "text-xl">Category: </label>
                            <select 
                                required 
                                onChange = {handleCategoryChange} 
                                value = {category} 
                                className = "border-2 border-gray-900 rounded p-2 text-black"
                            >
                                <option value = "produce">Produce</option>
                                <option value = "dairy">Dairy</option>
                                <option value = "bakery">Bakery</option>
                                <option value = "meat">Meat</option>
                                <option value = "frozen foods">Frozen Foods</option>
                                <option value = "canned goods">Canned Goods</option>
                                <option value = "dry goods">Dry Goods</option>
                                <option value = "beverages">Beverages</option>
                                <option value = "snacks">Snacks</option>
                                <option value = "household">Household</option>
                                <option value = "other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className = "flex flex-col m-4">
                        <button
                            type = "submit"
                            className = "bg-gray-900 text-white rounded p-2">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}