import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {
    name: 'Goose Neck Pilsner',
    brewery: 'Pillsbury Brewery',
    abv: '6.7',
    price: 10,
    pints: 124
  },
  {
    name: 'Chucks Brown Ale',
    brewery: 'Hilltop',
    abv: '8',
    price: 15,
    pints: 124
  },
  {
    name: 'PNW IPA',
    brewery: 'Mountain Water',
    abv: '8.8',
    price: 14,
    pints: 124
  }
];

export default function KegList(){
  return(
    <>
      {masterKegList.map((keg, index) => 
        <Keg 
          name={keg.name}
          brewery={keg.brewery}
          abv={keg.abv}
          price={keg.price}
          pints={keg.pints}
          key={index} 
          />
      )}
    </>
  );
}