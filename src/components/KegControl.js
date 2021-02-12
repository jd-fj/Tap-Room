import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

export default class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisble: false,
      masterKegList: [
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
          brewery: 'Moland Springs',
          abv: 8.8,
          description: 'Like sipping from a river',
          price: 14,
          pints: 124
        }
      ]
    };
  }

  handleClick = () => {
    this.setState(prevState =>({
      formVisible: !prevState.formVisible
    }));
  }
  // here we pass in state so it knows about the current state. We can use this to toggle a boolean, increment/decrement values with a counter, update the state of a game, etc. 

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
      formVisible: false 
    });
  }

  render(){
    let currentlyVisibleState = null;
    let btnText = null;

    if (this.state.formVisible){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      btnText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList}/>
      btnText = "Add Keg";
    }

    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{btnText}</button>
      </>
    );
  }
}