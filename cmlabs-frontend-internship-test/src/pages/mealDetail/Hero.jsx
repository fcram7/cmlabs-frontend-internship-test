import PropTypes from 'prop-types';
import IngredientsList from './components/IngredientsList';

const Hero = ({
  strMeal,
  strMealThumb,
  strTags,
  strCategory,
  strArea,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strIngredient7,
  strIngredient8,
  strIngredient9,
  strIngredient10,
  strIngredient11,
  strIngredient12,
  strIngredient13,
  strIngredient14,
  strIngredient15,
  strIngredient16,
  strIngredient17,
  strIngredient18,
  strIngredient19,
  strIngredient20,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
  strMeasure6,
  strMeasure7,
  strMeasure8,
  strMeasure9,
  strMeasure10,
  strMeasure11,
  strMeasure12,
  strMeasure13,
  strMeasure14,
  strMeasure15,
  strMeasure16,
  strMeasure17,
  strMeasure18,
  strMeasure19,
  strMeasure20,
}) => {
  const ingredients = [
    {
      ingredient: strIngredient1,
      measure: strMeasure1,
    },
    {
      ingredient: strIngredient2,
      measure: strMeasure2,
    },
    {
      ingredient: strIngredient3,
      measure: strMeasure3,
    },
    {
      ingredient: strIngredient4,
      measure: strMeasure4,
    },
    {
      ingredient: strIngredient5,
      measure: strMeasure5,
    },
    {
      ingredient: strIngredient6,
      measure: strMeasure6,
    },
    {
      ingredient: strIngredient7,
      measure: strMeasure7,
    },
    {
      ingredient: strIngredient8,
      measure: strMeasure8,
    },
    {
      ingredient: strIngredient9,
      measure: strMeasure9,
    },
    {
      ingredient: strIngredient10,
      measure: strMeasure10,
    },
    {
      ingredient: strIngredient11,
      measure: strMeasure11,
    },
    {
      ingredient: strIngredient12,
      measure: strMeasure12,
    },
    {
      ingredient: strIngredient13,
      measure: strMeasure13,
    },
    {
      ingredient: strIngredient14,
      measure: strMeasure14,
    },
    {
      ingredient: strIngredient15,
      measure: strMeasure15,
    },
    {
      ingredient: strIngredient16,
      measure: strMeasure16,
    },
    {
      ingredient: strIngredient17,
      measure: strMeasure17,
    },
    {
      ingredient: strIngredient18,
      measure: strMeasure18,
    },
    {
      ingredient: strIngredient19,
      measure: strMeasure19,
    },
    {
      ingredient: strIngredient20,
      measure: strMeasure20,
    },
  ];

  const filteredIngredients = ingredients.filter(
    (ingredient) => ingredient.ingredient !== '' && ingredient.measure !== ''
  );

  return (
    <div className='w-full meal-detail-hero'>
      <div className='relative flex flex-col items-start overflow-hidden md:gap-4 xl:gap-10 md:flex-row meal-detail-hero__content'>
        <div className='flex items-center justify-center overflow-hidden meal-detail-hero__hero-img'>
          <img
            className='object-cover scale-90 border-2 border-transparent rounded-3xl'
            src={strMealThumb}
            alt={`Image for ${strMeal}`}
          />
        </div>
        <div className='md:mt-8 meal-detail-hero__meal-texts'>
          <h1 className='mb-4 text-2xl md:text-3xl xl:text-5xl meal-detail-hero__meal-name'>
            {strMeal}
          </h1>
          <div className='flex items-center gap-4 meal-detail-hero__meal-tags'>
            <span>Tags: </span>
            {strTags ? (
              <span className='px-2 py-1 border-2 rounded-full meal-detail-hero__meal-tags'>
                {strTags}
              </span>
            ) : (
              <span>No tags</span>
            )}
          </div>

          <p className='my-4 md:text-2xl meal-detail-hero__meal-description'>
            A {strCategory} dish originated from {strArea}
          </p>
          <div className='mt-6 meal-detail-hero__meal-ingredients'>
            <p className='xl:text-3xl'>Ingredients</p>
            <ul className='grid grid-cols-2 mt-4 gap-x-8 meal-detail-hero__meal-ingredients-list ms-5'>
              {filteredIngredients.map((ingredient, index) => (
                <IngredientsList key={index} measure={ingredient.measure} ingredient={ingredient.ingredient} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  strMeal: PropTypes.string,
  strTags: PropTypes.string,
  strMealThumb: PropTypes.string,
  strCategory: PropTypes.string,
  strArea: PropTypes.string,
  strIngredient1: PropTypes.string,
  strIngredient2: PropTypes.string,
  strIngredient3: PropTypes.string,
  strIngredient4: PropTypes.string,
  strIngredient5: PropTypes.string,
  strIngredient6: PropTypes.string,
  strIngredient7: PropTypes.string,
  strIngredient8: PropTypes.string,
  strIngredient9: PropTypes.string,
  strIngredient10: PropTypes.string,
  strIngredient11: PropTypes.string,
  strIngredient12: PropTypes.string,
  strIngredient13: PropTypes.string,
  strIngredient14: PropTypes.string,
  strIngredient15: PropTypes.string,
  strIngredient16: PropTypes.string,
  strIngredient17: PropTypes.string,
  strIngredient18: PropTypes.string,
  strIngredient19: PropTypes.string,
  strIngredient20: PropTypes.string,
  strMeasure1: PropTypes.string,
  strMeasure2: PropTypes.string,
  strMeasure3: PropTypes.string,
  strMeasure4: PropTypes.string,
  strMeasure5: PropTypes.string,
  strMeasure6: PropTypes.string,
  strMeasure7: PropTypes.string,
  strMeasure8: PropTypes.string,
  strMeasure9: PropTypes.string,
  strMeasure10: PropTypes.string,
  strMeasure11: PropTypes.string,
  strMeasure12: PropTypes.string,
  strMeasure13: PropTypes.string,
  strMeasure14: PropTypes.string,
  strMeasure15: PropTypes.string,
  strMeasure16: PropTypes.string,
  strMeasure17: PropTypes.string,
  strMeasure18: PropTypes.string,
  strMeasure19: PropTypes.string,
  strMeasure20: PropTypes.string,
};
