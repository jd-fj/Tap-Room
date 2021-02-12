import React from 'react';

export default function Keg(props){
  return (
    <>
      <h2>{props.name}</h2>
      <h4>Brewery: {props.brewery}</h4>
      <h4>ABV: {props.abv}</h4>
      <h4>price: {props.price}</h4>
      <hr/>
    </>
  )
}