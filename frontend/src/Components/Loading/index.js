import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedOption) {
    this.setState({
      selectedOption
    });
  }

  render() {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }
}

export default Loading;
