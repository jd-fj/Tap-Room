import React from 'react';
import { v4 } from 'uuid';

export default function NewKegForm(props){

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brewery.value);
    console.log(event.target.abv.value);
    console.log(event.target.description.value);
    console.log(event.target.price.value);
    console.log(event.target.pints.value);

  }

  return (
    <>
      <form onSubmit={handleNewKegFormSubmission}>
        <input 
          type='text'
          name='name'
          placeholder='Beverage Name' />
        <input 
          type='text'
          name='brewery'
          placeholder='Brewery' />
        <input 
          type='number'
          name='abv'
          placeholder='ABV number' />
        <textarea
          name='description'
          placeholde='Beverage Description' />
        <input 
          type='number'
          name='price'
          placeholder='Price Per Pint' />
        <input 
          type='number'
          name='pints'
          placeholder=' Enter 127 for New Keg' />
        <button type='submit'>Add New Keg</button>
      </form>
    </>
  );
}