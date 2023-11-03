import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [fetchedMeal, setFetchedMeal] = useState([]);

  async function fetchMealIdeas() {
    if (!ingredient) {
      setMeals([]);

      setFetchedMeal([]);
      return;
    }
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();

      if (!data.meals || data.meals.length === 0) {
        setMeals([]);

        setFetchedMeal([]);
        return;
      }

      setMeals(data.meals);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      setMeals([]);
      setFetchedMeal([]);
    }
  }

  async function fetchIngredients(mealID) {
    if (fetchedMeal.includes(mealID)) {
      return;
    }

    setIngredients([]);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
      );
      const data = await response.json();
      const ingredientsList = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = data.meals[0][`strIngredient${i}`];
        const measure = data.meals[0][`strMeasure${i}`];
        if (ingredient && measure) {
          ingredientsList.push({ ingredient, measure });
        }
      }
      setIngredients(ingredientsList);
      setFetchedMeal([mealID]);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      setIngredients([]);
    }
  }

  useEffect(() => {
    fetchMealIdeas();
  }, [ingredient]);

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
                      onClick={() => fetchIngredients(meal.idMeal)}
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
