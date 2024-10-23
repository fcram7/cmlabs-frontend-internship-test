import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BackTo = ({ backTo, link }) => {
  return ( 
    <Link to={link} className='transition-opacity duration-200 ease-in-out opacity-50 xl:text-2xl hover:opacity-100'>Back to {backTo}</Link>
   );
}
 
export default BackTo;

BackTo.propTypes = {
  backTo: PropTypes.string,
  link: PropTypes.string
}