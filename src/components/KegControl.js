import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

export default class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisble: false
    };
  }

  handleClick = () => {
    this.setState(prevState =>({
      formVisible: !prevState.formVisible
    }));
  }
  // here we pass in state so it knows about the current state. We can use this to toggle a boolean, increment/decrement values with a counter, update the state of a game, etc. 

  render(){
    let currentlyVisibleState = null;
    let addKegBtn = null;
    if (this.state.formVisible){
      currentlyVisibleState = <NewKegForm />
    } else {
      currentlyVisibleState = <KegList />
      addKegBtn = <button onClick={this.handleClick}>Add a Keg</button>
    }

    return(
      <>
        {currentlyVisibleState}
        {addKegBtn}
      </>
    );
  }
}