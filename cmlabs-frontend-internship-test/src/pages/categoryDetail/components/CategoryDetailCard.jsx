import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CategoryDetailCard = ({ idMeal, strMeal, strMealThumb }) => {
  const [hover, setHover] = useState(false);
  const { strCategory } = useParams();

  const hoverHandler = () => {
    setHover((prevHover) => !prevHover);
  };
  return (
    <article
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
      className='overflow-hidden border-2 border-transparent category-detail-card rounded-3xl'
    >
      <div className='relative flex flex-col items-center justify-center overflow-hidden category-detail-card__content'>
        <div className='category-detail-card__meal-img'>
          <img
            className={`object-cover w-full h-full ${
              hover ? 'scale-100 opacity-50' : 'scale-110 opacity-100'
            } transition-all ease-in-out duration-200`}
            src={strMealThumb}
            alt={`Thumbnail for ${strMeal}`}
          />
        </div>
        <div
          className={`absolute bottom-0 w-full rounded-b-3xl border-2 border-transparent px-3 py-3 mx-3 h-fit category-detail-card__meal-name-container backdrop-blur-md transition-all ease-in-out duration-300 ${
            hover ? 'xl:translate-y-0' : 'translate-y-0 xl:translate-y-full'
          }`}
        >
          <Link
            to={`/${strCategory}/${idMeal}`}
            className='font-bold text-center transition-opacity duration-200 ease-in-out opacity-60 xl:text-md text-primaryText hover:opacity-100'
          >
            {strMeal}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CategoryDetailCard;

CategoryDetailCard.propTypes = {
  idMeal: PropTypes.string,
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
};
