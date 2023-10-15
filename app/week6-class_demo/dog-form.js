"use client";

import { useState } from 'react';

export default function DogForm({ mySubmit }){
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [timesSubmitted, setTimesSubmitted] = useState(0);

    function handleSubmit(event){

        if (timesSubmitted >= 5){
            alert("You have submitted too many times. Please refresh the page.");
            return;
        }
        setTimesSubmitted(timesSubmitted + 1);

        event.preventDefault();

        const newDog = {name, age};
        mySubmit(newDog);

        setName("");
        setAge(0);
    }

    return(
        <div>
            <h2>Add a Dog</h2>
            <form onSubmit={handleSubmit} className="text-black">
                <label htmlFor="name">Name</label>
                    <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className=""
                    />
                <label htmlFor="age">Age</label>
                    <input 
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    className=""
                    />
                <button>Submit</button>
            </form>
        </div>
    );
}