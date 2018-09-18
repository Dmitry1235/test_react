import React, {Component} from 'react';


class Button extends Component {

  shouldComponentUpdate(nextProps) {
    return !(nextProps.text === this.props.text && nextProps.disabl === this.props.disabl);
  }

  render() {
    const {click, disabl, text, classstyle} = this.props;
    return (
      <button className={classstyle} onClick={click} disabled={disabl}>{text}</button>
    );
  }
}

export default Button;
