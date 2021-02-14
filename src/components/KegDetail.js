import React from 'react';
import PropTypes from 'prop-types';

export default function KegDetail(props){
  const {keg, onClickingDelete, onClickingSell} = props;

  return (
    <>
      <h1>About This Beer</h1>
      <h3>The {keg.name} from {keg.brewery}</h3>
      <h5>Description: {keg.description}</h5>
      <h5>ABV: {keg.abv}</h5>
      <h5>Price per pint: {keg.price}</h5>
      <h5>Pints Left In Keg: {keg.pints}</h5>
      <button onClick={()=> onClickingDelete(keg.id)}>Delete Keg</button>
      <button onClick={()=> onClickingSell(keg.id)}>Sell a Pint from this Keg</button>
      <hr/>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingSell: PropTypes.func
};