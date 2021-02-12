import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {
    name: 'Goose Neck Pilsner',
    brewery: 'Pillsbury Brewery',
    abv: 6.7,
    description: 'has a pill-y, light flavor, great for the whole family',
    price: 10,
    pints: 124
  },
  {
    name: 'Chucks Brown Ale',
    brewery: 'Hilltop',
    abv: 8,
    description: 'Chunky, dark, malty flaves',
    price: 15,
    pints: 124
  },
  {
    name: 'PNW IPA',
    brewery: 'Mountain Water',
    abv: 8.8,
    description: 'Like sipping from a river',
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
          description={keg.description}
          price={keg.price}
          pints={keg.pints}
          key={index} 
          />
      )}
    </>
  );
}