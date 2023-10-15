"use client"

import DogForm from "./dog-form"
import DogList from "./dog-list"
import { useState } from "react";

const dogData = [
  {name: "Gunther", age: 5},
  {name: "Darcy", age: 3},
  {name: "Spike", age: 8},
  {name: "Piper", age: 2},
  {name: "Molly", age: 4},
  ];


export default function Home() {
  const [dogs, setDogs] = useState(dogData);
  
  function handleSubmit(dog){
    setDogs([...dogs, dog]);
  }
  
  function handleDelete(name){
    setDogs(dogs.filter((d) => d.name !== name));
  }

  
  return (
      <div>
        <h1 className="text-4xl m-4 font-bold">My Favorite Dogs</h1>
        <DogForm mySubmit={handleSubmit} />
        <DogList dogs={dogs} onDelete={handleDelete}/>
      </div>
    )
}