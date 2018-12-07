import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveFocusMap } from './redux/focusMap/actions'
import AppRouter from './router'


const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (event) => {
    const { moveFocusMap } = this.props;

    const LEFT = 37; // код кнопки на реальном устройстве
    const UP = 38; // код кнопки на реальном устройстве
    const RIGHT = 39; // код кнопки на реальном устройстве
    const DOWN = 40; // код кнопки на реальном устройстве

    switch (event.keyCode) {
      case LEFT:
        moveFocusMap("LEFT");
        break;
      case UP:
        moveFocusMap("UP");
        break;
      case RIGHT:
        moveFocusMap("RIGHT");
        break;
      case DOWN:
        moveFocusMap("DOWN");
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <AppRouter />
    );
  }
}

export default connect(mapStateToProps, {
  moveFocusMap,
})(App);
