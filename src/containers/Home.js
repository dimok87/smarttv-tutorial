import React, { Component } from 'react';
import FocusableButton from '../components/FocusableButton';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <FocusableButton>
          Button 1
        </FocusableButton>
        <FocusableButton>
          Button 2
        </FocusableButton>
        <FocusableButton inRow isFocus>
          Button 3
        </FocusableButton>
        <FocusableButton>
          Button 4
        </FocusableButton>
      </div>
    );
  }
}

export default Home;
