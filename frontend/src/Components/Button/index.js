import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        className="defaultButton"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
