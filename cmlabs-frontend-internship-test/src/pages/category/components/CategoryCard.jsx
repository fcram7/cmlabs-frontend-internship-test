import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  const [hover, setHover] = useState(false);
  const [description, setDescription] = useState(false);

  const cardHoverHandler = () => {
    setHover((prevHover) => !prevHover);
  };

  const descriptionHandler = () => {
    setDescription((prevDescription) => !prevDescription);
  };
  return (
    <article
      onMouseEnter={cardHoverHandler}
      onMouseLeave={cardHoverHandler}
      className={`relative border-2 border-slate-300 ${
        description ? 'h-fit' : 'h-[320px]'
      } rounded-xl category-card bg-slate-200 shadow-xl`}
    >
      <div className='overflow-hidden category-card__content'>
        <div
          className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
            hover ? 'scale-100 opacity-50' : 'scale-110 opacity-100'
          } category-card__image-container`}
        >
          <img
            className='object-cover'
            src={strCategoryThumb}
            alt={`Image for ${strCategory}`}
          />
        </div>
        <div className='px-4 py-2 category-card__category-name w-fit'>
          <Link
            to={`/${strCategory}`}
            className={`${
              hover ? 'opacity-100' : 'opacity-50'
            } xl:text-4xl transition-opacity ease-in-out duration-200 category-card__category-name-text`}
          >
            {strCategory}
          </Link>
        </div>
        <div className='flex items-center justify-start w-full px-4 transition-opacity duration-200 ease-in-out xl:text-lg category-card__show-hide-description'>
          <div
            onClick={descriptionHandler}
            className={`${
              hover ? 'opacity-100' : 'opacity-50'
            } cursor-pointer hover:opacity-60 transition-opacity ease-in-out duration-200`}
          >
            {description ? 'Hide' : 'Show'} description
          </div>
        </div>
        <div
          className={`${
            description
              ? 'translate-y-0 opacity-100 delay-150 duration-200'
              : 'translate-y-full opacity-0 duration-100'
          } p-4 category-card__category-description-text transition-all ease-in-out`}
        >
          <p className='text-justify'>{strCategoryDescription}</p>
        </div>
      </div>
    </article>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  strCategory: PropTypes.string,
  strCategoryThumb: PropTypes.string,
  strCategoryDescription: PropTypes.string,
};
