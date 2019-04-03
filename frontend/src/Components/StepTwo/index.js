import React, { Component } from 'react';
import swal from 'sweetalert';
import './StepTwo.css';

import Select from 'react-select';
import Button from '../Button/index';
import Loading from '../Loading/index';

class StepTwo extends Component {
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
    let album = this.state.selectedOption;

    if (album) {
      this.props.submit(3, this.state.selectedOption);
    } else {
      swal("Oops!", "Please select an album to continue", "info");
    };
  }

  render() {
    return (
      <span>
        { this.props.loading ?
            <Loading />
          :
          <div className="stepTwo">
            <div className="stepOneTitle">
              <h2>Now select an album</h2>
            </div>
            <div className="stepTwoBody">
              <Select
                className="select"
                options={this.props.options}
                onChange={this.handleChange}
                value={this.state.selectedOption}
              />
              <Button
                onClick={this.attemptSubmit}
              >
                View Photos
              </Button>
            </div>
          </div>
        }
      </span>
    );
  }
}

export default StepTwo;
