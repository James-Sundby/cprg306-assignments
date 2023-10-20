"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async () => {
    setMeals([]);
    if (!ingredient) {
      return;
    }
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      setMeals([]);
    }
  };

  useEffect(() => {
    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div className="card bg-base-200 shadow-xl max-w-lg mx-2 mb-2">
      <div className="card-body">
        <p className="card-title text-2xl">Meal Ideas</p>
        {ingredient ? (
          <>
            {meals ? (
              <>
                <p>{`Here are some meal ideas using ${ingredient}:`}</p>
                <ul>
                  {meals.map((meal) => (
                    <li className="hover:btn-active" key={meal.idMeal}>
                      {meal.strMeal}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>{`No meals found using ${ingredient}`}</p>
            )}
          </>
        ) : (
          <p>Select an item to see meal ideas</p>
        )}
      </div>
    </div>
  );
}
