import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../../api/api';
import CategoryDetailCard from './components/CategoryDetailCard';
import BackTo from '../../components/BackTo';

const MealList = () => {
  const { strCategory } = useParams();
  const [mealList, setMealList] = useState([]);

  
  useEffect(() => {
    const getAllMeal = async () => {
      try {
        const allMealsData = await Api.getAllMeal(strCategory);
  
        setMealList(allMealsData.data.meals);
      } catch (err) {
        console.error(err);
      }
    };

    getAllMeal();
  }, [strCategory]);

  return (
    <section className='meal-list-section px-[4%] xl:px-[2%] py-12 bg-backgroundMain'>
      <h1 className='mb-12 text-xl meal-list-section__section-title md:text-3xl xl:text-4xl'>
        All {strCategory} Meals
      </h1>
      <BackTo backTo='Meal Category' link='/' />
      <div className='mt-6 meal-list-section__content'>
        <div className='grid md:grid-cols-3 xl:grid-cols-5 meal-list-section__meal-list gap-x-6 gap-y-4'>
          {mealList.map((meal, index) => (
            <CategoryDetailCard
              idMeal={meal.idMeal}
              strMeal={meal.strMeal}
              strMealThumb={meal.strMealThumb}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealList;
