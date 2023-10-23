import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient, updateNumberOfMeals }) {
  const [meals, setMeals] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [fetchedMeals, setFetchedMeals] = useState([]);

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

      if (!data.meals || data.meals.length === 0) {
        setMeals([]);
        updateNumberOfMeals(0);
        return;
      }

      setMeals(data.meals);
      updateNumberOfMeals(data.meals.length);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      setMeals([]);
      updateNumberOfMeals(0);
    }
  }

  async function fetchIngredients(mealID) {
    if (fetchedMeals.includes(mealID)) {
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
      setFetchedMeals([...fetchedMeals, mealID]);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      setIngredients([]);
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
                      <input type="radio" name="my-accordion" />
                      <div className="collapse-title text-xl font-medium">
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
