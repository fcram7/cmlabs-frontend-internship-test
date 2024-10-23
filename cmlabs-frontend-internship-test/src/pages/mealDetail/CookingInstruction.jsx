import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CookingInstruction = ({
  strMeal,
  strYoutube,
  strSource,
  strInstruction,
}) => {
  const embedID = strYoutube.slice(strYoutube.indexOf('v=') + 2);
  const instructionArray = strInstruction.split('\r\n');

  return (
    <section className='mt-6 cooking-instruction md:mt-0'>
      <h1 className='text-xl cooking-instruction__section-title md:text-3xl xl:text-4xl'>
        Cooking Instruction for {strMeal}
      </h1>
      <div className='cooking-instruction__content'>
        <div className='flex items-center justify-center my-10 cooking-instruction__youtube-video'>
          <iframe
            width='853'
            height='480'
            src={`https://www.youtube.com/embed/${embedID}`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
        </div>

        <div className='cooking-instruction__instruction-text'>
          <ol className='grid gap-3 mt-4'>
            {instructionArray.map((instruction, index) => (
              <li key={index}>{index + 1}. {instruction}</li>
            ))}
          </ol>
          <div className="flex items-center gap-1 mt-8 cooking_instruction__instruction-source">
            <div className=''>This recipe is sourced from</div>
            <Link to={strSource} target='_blank' className='underline transition-opacity duration-200 ease-in-out opacity-50 underline-offset-2 hover:opacity-100'>This source URL</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookingInstruction;

CookingInstruction.propTypes = {
  strMeal: PropTypes.string,
  strYoutube: PropTypes.string,
  strSource: PropTypes.string,
  strInstruction: PropTypes.string,
};
