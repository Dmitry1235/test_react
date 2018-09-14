import React, {Component} from 'react';


class Button extends Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps.text === this.props.text) {
      return false;
    }
    return true;
  }

  render() {
    const {click, text} = this.props;
    return (
      <button onClick={click}>{text}</button>
    );
  }
}

export default Button;
