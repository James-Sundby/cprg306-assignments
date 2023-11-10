export const fetchMealIdeas = async (ingredient) => {
  try {
    if (!ingredient) {
      return [];
    }

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();

    if (!data.meals || data.meals.length === 0) {
      return [];
    }

    return data.meals;
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

export const fetchIngredients = async (mealID) => {
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

    return ingredientsList;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    return [];
  }
};
