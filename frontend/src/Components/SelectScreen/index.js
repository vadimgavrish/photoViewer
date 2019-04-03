import React, { Component } from 'react';
import swal from 'sweetalert';
import './SelectScreen.css';

import Select from 'react-select';
import Button from '../Button/index';
import Loading from '../Loading/index';

class SelectScreen extends Component {
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
    let selectedOption = this.state.selectedOption;

    if (selectedOption) {
      this.props.submit(this.props.activeStep, this.state.selectedOption);
    } else {
      if (this.props.activeStep === 2) {
        swal("Oops!", "Please select a user to continue", "info");
      } else if (this.props.activeStep === 3) {
        swal("Oops!", "Please select an album to continue", "info");
      };
    };
  }

  render() {
    return (
      <span>
        { this.props.loading ?
            <Loading />
          :
          <div className="selectScreen">
            <div className="selectScreenTitle">
              { this.props.activeStep === 2 &&
                <h2>Select a user</h2>
              }
              { this.props.activeStep === 3 &&
                <h2>Now select an album</h2>
              }
            </div>
            <div className="selectScreenBody">
              <Select
                className="select"
                options={this.props.options}
                onChange={this.handleChange}
                value={this.state.selectedOption}
              />
              <Button
                onClick={this.attemptSubmit}
              >
                { this.props.activeStep === 2 &&
                  'Next'
                }
                { this.props.activeStep === 3 &&
                  'View Photos'
                }
              </Button>
            </div>
          </div>
        }
      </span>
    );
  }
}

export default SelectScreen;
