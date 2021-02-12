import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

export default function KegList(props){
  return(
    <>
      {props.kegList.map((keg, index) => 
        <Keg 
          name={keg.name}
          brewery={keg.brewery}
          description={keg.description}
          abv={parseFloat(keg.abv)}
          price={parseFloat(keg.price)}
          pints={parseInt(keg.pints)}
          key={index} 
          />
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};