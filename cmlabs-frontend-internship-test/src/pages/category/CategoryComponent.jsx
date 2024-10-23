import { Api } from '../../api/api';
import { useEffect, useState } from 'react';
import CategoryCard from './components/CategoryCard';

const CategoryComponent = () => {
  const [allCategories, setAllCategories] = useState([]);
  const getAllCategories = async () => {
    try {
      const allCategoriesData = await Api.getAllCategories();
      setAllCategories(allCategoriesData.data.categories);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <section className='category-section px-[4%] xl:px-[2%] py-12 bg-backgroundMain'>
      <h1 className='mb-12 category-section__section-title xl:text-4xl'>
        All Meal Categories
      </h1>
      <div className='category-section__content'>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 category-section__all-categories-list gap-x-6 gap-y-4'>
          {allCategories.map((category) => (
            <CategoryCard
              key={category.idCategory}
              strCategory={category.strCategory}
              strCategoryThumb={category.strCategoryThumb}
              strCategoryDescription={category.strCategoryDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryComponent;
