"use client";

import { useState, useEffect } from "react";

async function fetchRandomDog() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json(); //filters response to js object, removes headers
    console.log(data);
    return data.message; //from json response
  } catch (error) {
    console.error(error);
  }
}

async function fetchDogBreeds() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error(error);
  }
}

export default function Page() {
  //const randomDog = fetchRandomDog(); //fetchRandomDog returns a promise needs an async function to get the data
  //console.log(randomDog);
  const [dog, setDog] = useState("");
  const [breeds, setBreeds] = useState([]);

  async function loadRandomDog() {
    const randomDog = await fetchRandomDog();
    console.log(randomDog);
    setDog(randomDog);
  }

  async function loadDogBreeds() {
    const dogBreeds = await fetchDogBreeds();
    setBreeds(dogBreeds);
  }

  useEffect(() => {
    loadRandomDog();
    loadDogBreeds();
  }, []); //dependency array, if empty only runs once
  // if not empty, runs when prop changes and is rerendered

  // can hold multiple functions if dependency array is the sameS

  return (
    <main>
      <h1>Dogs!</h1>
      <div>
        <select name="breeds" className="">
          {Object.keys(breeds).map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
      </div>
      <div>
        <img src={dog} />
      </div>
    </main>
  );
}
