import React from 'react';
import PropTypes from 'prop-types';

export default function Keg(props){
  return (
    <>
      <h2>{props.name}</h2>
      <h4>Brewery: {props.brewery}</h4>
      <h4>ABV: {props.abv}</h4>
      <h4>price: {props.price}</h4>
      <h4>Pints Left: {props.pints}</h4>
      <hr/>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.number,
  pints: PropTypes.number
}