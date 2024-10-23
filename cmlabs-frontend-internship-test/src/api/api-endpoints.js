import { Config } from './config';

export const ApiEndpoints = {
  ALL_CATEGORIES: `${Config.BASE_URL}/categories.php`,
  FILTER_CATEGORY: (strCategory) =>  `${Config.BASE_URL}/filter.php?c=${strCategory}`,
  MEAL_DETAIL: (idMeal) => `${Config.BASE_URL}/lookup.php?i=${idMeal}`
}