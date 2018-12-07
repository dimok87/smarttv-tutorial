import React from "react";
import { connect } from "react-redux";
import { v4 } from "node-uuid";

import { addToFocusMap, removeFromFocusMap } from "../redux/focusMap/actions";

export default function withNavigate(WrappedComponent) {
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isFocus: props.isFocus || false,
      };

      this.instance = new WrappedComponent(props);

      this.instance.setFocus = this.setFocus;

      this.instance.setBlur = this.setBlur;

      this.id = v4();
    }

    componentDidMount() {
      const { addToFocusMap, inRow } = this.props;
      const { isFocus } = this.state;

      addToFocusMap(
        this.id,
        this.instance,
        isFocus,
        inRow,
      );
    }

    componentWillUnmount() {
      const { removeFromFocusMap } = this.props;
      removeFromFocusMap(this.id);
    }

    setFocus = () => {
      this.setState({
        isFocus: true,
      });
    };

    setBlur = () => {
      this.setState({
        isFocus: false,
      });
    };

    render() {
      return (
				<WrappedComponent { ...this.props } { ...this.state } />
      );
    }
  }

  return connect(null, {
    addToFocusMap,
    removeFromFocusMap,
  })(Wrapper);
}
