import { useState, useEffect } from "react";
import { fetchMealIdeas, fetchIngredients } from "../_services/meal-services";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [fetchedMeal, setFetchedMeal] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }

    fetchData();
  }, [ingredient]);

  const handleMealClick = async (mealID) => {
    if (fetchedMeal.includes(mealID)) {
      return;
    }

    const ingredientsList = await fetchIngredients(mealID);
    setIngredients(ingredientsList);
    setFetchedMeal([mealID]);
  };

  return (
    <div className="card bg-base-200 shadow-xl max-w-lg mx-2 mb-2">
      <div className="card-body">
        <p className="card-title text-2xl">Meal Ideas</p>
        {ingredient ? (
          <>
            {meals.length > 0 ? (
              <>
                <p>
                  Here are some meal ideas using{" "}
                  <span className="font-bold text-primary">{ingredient}</span>:
                </p>
                <ul>
                  {meals.map((meal) => (
                    <div
                      key={meal.idMeal}
                      className="collapse collapse-arrow bg-base-100 hover:btn-active mb-2"
                      onClick={() => handleMealClick(meal.idMeal)}
                    >
                      <input type="radio" name="meals" />
                      <div className="collapse-title text-xl font-medium flex gap-4">
                        <img
                          className="w-12 mask mask-squircle"
                          src={meal.strMealThumb}
                          alt={meal.strMeal}
                        />
                        {meal.strMeal}
                      </div>
                      <div className="collapse-content">
                        <p className="font-bold mb-2">Ingredients needed:</p>
                        <ul>
                          {ingredients.map((ingredient, index) => (
                            <li key={index}>
                              {ingredient.ingredient} {ingredient.measure}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </ul>
              </>
            ) : (
              <p>
                No meals found using{" "}
                <span className="font-bold text-primary">{ingredient}</span>.
              </p>
            )}
          </>
        ) : (
          <p>Select an item to see meal ideas</p>
        )}
      </div>
    </div>
  );
}
