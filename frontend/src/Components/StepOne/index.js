import React, { Component } from 'react';
import swal from 'sweetalert';
import './StepOne.css';

import Select from 'react-select';
import Button from '../Button/index';
import Loading from '../Loading/index';

class StepOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.attemptSubmit = this.attemptSubmit.bind(this);
  }

  handleChange(selectedOption) {
    this.setState({
      selectedOption
    });
  }

  attemptSubmit() {
    let user = this.state.selectedOption;

    if (user) {
      this.props.submit(2, this.state.selectedOption);
    } else {
      swal("Oops!", "Please select a user to continue", "info");
    };
  }

  render() {
    return (
      <span>
        { this.props.loading ?
            <Loading />
          :
          <div className="stepOne">
            <div className="stepOneTitle">
              <h2>Select a user</h2>
            </div>
            <div className="stepOneBody">
              <Select
                className="select"
                options={this.props.options}
                onChange={this.handleChange}
                value={this.state.selectedOption}
              />
              <Button
                onClick={this.attemptSubmit}
              >
                Next
              </Button>
            </div>
          </div>
        }
      </span>
    );
  }
}

export default StepOne;
