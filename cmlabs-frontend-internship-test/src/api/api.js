import axios from 'axios';
import { ApiEndpoints } from './api-endpoints';

export const Api = {
  async getAllCategories() {
    try {
      const allCategoriesData = await axios.get(ApiEndpoints.ALL_CATEGORIES);

      return allCategoriesData;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async getAllMeal(categoryMeal) {
    try {
      const allMealData = await axios.get(
        ApiEndpoints.FILTER_CATEGORY(categoryMeal)
      );

      return allMealData;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async getMealDetail(idMeal) {
    try {
      const mealDetailData = await axios.get(ApiEndpoints.MEAL_DETAIL(idMeal));

      return mealDetailData;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};
