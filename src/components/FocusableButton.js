import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import withNavigate from "../HOC/withNavigate";

class FocusableButton extends Component {
  render() {
    const { children, isFocus } = this.props;
    return (
      <div>
        <Button variant={isFocus ? "contained" : "outlined"} color="primary">
          { children }
        </Button>
      </div>
    );
  }
}

export default withNavigate(FocusableButton);
