import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient, updateNumberOfMeals }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas() {
    if (!ingredient) {
      setMeals([]);
      updateNumberOfMeals(0);
      return;
    }
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals);
      if (data.meals && data.meals.length > 0) {
        updateNumberOfMeals(data.meals.length);
      } else {
        updateNumberOfMeals(0);
      }
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      setMeals([]);
      updateNumberOfMeals(0);
    }
  }

  useEffect(() => {
    fetchMealIdeas();
  }, [ingredient, updateNumberOfMeals]);
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
              <p>{`No meals found using ${ingredient}.`}</p>
            )}
          </>
        ) : (
          <p>Select an item to see meal ideas</p>
        )}
      </div>
    </div>
  );
}
