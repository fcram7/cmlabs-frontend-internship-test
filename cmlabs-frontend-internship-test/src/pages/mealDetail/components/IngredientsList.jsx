import PropTypes from 'prop-types';

const IngredientsList = ({ ingredient, measure }) => {
  return ( 
    <li className="list-disc ingredients-list">
      <p className='ingredients-list__text'>{measure} {ingredient}</p>
    </li>
   );
}
 
export default IngredientsList;

IngredientsList.propTypes = {
  ingredient: PropTypes.string,
  measure: PropTypes.string
}