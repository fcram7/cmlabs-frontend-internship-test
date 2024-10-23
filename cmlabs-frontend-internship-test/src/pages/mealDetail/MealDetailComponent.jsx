import { useParams } from 'react-router-dom';
import { Api } from '../../api/api';
import { useEffect, useState } from 'react';
import Hero from './Hero';
import CookingInstruction from './CookingInstruction';
import BackTo from '../../components/BackTo';

const MealDetailComponent = () => {
  const { idMeal, strCategory } = useParams();
  const [mealDetail, setMealDetail] = useState([]);

  useEffect(() => {
    const mealData = async () => {
      try {
        const mealDetailData = await Api.getMealDetail(idMeal);
        setMealDetail(mealDetailData.data.meals);
      } catch (err) {
        console.error(err);
      }
    };

    mealData();
  }, [idMeal]);

  console.log(mealDetail);
  return (
    <section className='meal-detail px-[4%] xl:px-[2%] pb-6 bg-backgroundMain'>
      <div className="pt-6 back-to">
        <BackTo backTo='Meal List' link={`/${strCategory}`} />
      </div>
      <div className='meal-detail__content'>
        {mealDetail.map((meal, index) => (
          <div key={index}>
            <Hero
              strMeal={meal.strMeal}
              strMealThumb={meal.strMealThumb}
              strTags={meal.strTags}
              strCategory={meal.strCategory}
              strArea={meal.strArea}
              strIngredient1={meal.strIngredient1}
              strIngredient2={meal.strIngredient2}
              strIngredient3={meal.strIngredient3}
              strIngredient4={meal.strIngredient4}
              strIngredient5={meal.strIngredient5}
              strIngredient6={meal.strIngredient6}
              strIngredient7={meal.strIngredient7}
              strIngredient8={meal.strIngredient8}
              strIngredient9={meal.strIngredient9}
              strIngredient10={meal.strIngredient10}
              strIngredient11={meal.strIngredient11}
              strIngredient12={meal.strIngredient12}
              strIngredient13={meal.strIngredient13}
              strIngredient14={meal.strIngredient14}
              strIngredient15={meal.strIngredient15}
              strIngredient16={meal.strIngredient16}
              strIngredient17={meal.strIngredient17}
              strIngredient18={meal.strIngredient18}
              strIngredient19={meal.strIngredient19}
              strIngredient20={meal.strIngredient20}
              strMeasure1={meal.strMeasure1}
              strMeasure2={meal.strMeasure2}
              strMeasure3={meal.strMeasure3}
              strMeasure4={meal.strMeasure4}
              strMeasure5={meal.strMeasure5}
              strMeasure6={meal.strMeasure6}
              strMeasure7={meal.strMeasure7}
              strMeasure8={meal.strMeasure8}
              strMeasure9={meal.strMeasure9}
              strMeasure10={meal.strMeasure10}
              strMeasure11={meal.strMeasure11}
              strMeasure12={meal.strMeasure12}
              strMeasure13={meal.strMeasure13}
              strMeasure14={meal.strMeasure14}
              strMeasure15={meal.strMeasure15}
              strMeasure16={meal.strMeasure16}
              strMeasure17={meal.strMeasure17}
              strMeasure18={meal.strMeasure18}
              strMeasure19={meal.strMeasure19}
              strMeasure20={meal.strMeasure20}
            />
            <CookingInstruction
              strMeal={meal.strMeal}
              strInstruction={meal.strInstructions}
              strYoutube={meal.strYoutube}
              strSource={meal.strSource}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MealDetailComponent;
