import React from 'react';
import Keg from './Keg'

export default function KegList(){
  return(
    <>
      <Keg 
      name='Goose Neck Pilsner'
      brewery='Pillsbury Brewery'
      abv='6.7'
      price='10'/>
      <Keg 
      name='Chucks Brown Ale'
      brewery='Hilltop'
      abv='8'
      price='15'/>
    </>
  );
}