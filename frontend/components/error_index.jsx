import React from 'react';

export default ({ errors }) => {
  const errorsList = errors.map((error, idx) => (
    <li key={ idx }>{ error }</li>
  ));
   
  return (
    <ul className='error-list'>
      { errorsList }
    </ul>
  );
}
