import React, { Component } from 'react';
import './App.css';

import StepOne from './Components/StepOne/index';
import StepTwo from './Components/StepTwo/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      activeStep: 1,
      users: [],
      albums: [],
      photos: [],
      selectedUser: null,
      selectedAlbum: null,
      albumPhotos: null
    };

    this.fetchUsers = this.fetchUsers.bind(this);
    this.fetchAlbums = this.fetchAlbums.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.setActiveStep = this.setActiveStep.bind(this);
  }

  componentDidMount() {
    // Fetch all users when the app first loads
    this.fetchUsers();
  };

  // Fetch all users from API
  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {

        let optionsArr = [];

        res.forEach(user => {
          optionsArr.push({
            value: user.id,
            label: user.name,
          });
        });

        this.setState({
          users: optionsArr,
          loading: false,
        });
      })
      .catch(err => console.error(err));
  };

  // Fetch all albums from API
  fetchAlbums(userId) {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(res => {
        let usersAlbums = [];

        res.forEach(album => {
          if (Number(album.userId) === Number(userId)) {
            const obj = {
              value: album.id,
              label: album.title,
            };

            usersAlbums.push(obj);
          };
        })

        this.setState({
          loading: false,
          albums: usersAlbums,
        })
      })
      .catch(err => console.error(err));
  }

  // Fetch pictures from the ABI
  fetchPictures(albumId) {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(res => {
        let albumPhotos = [];

        res.forEach(picture => {
          if (Number(picture.albumId) === Number(albumId)) {
            albumPhotos.push(picture);
          };
        });

        this.setState({
          albumPhotos,
          loading: false,
        });

        console.log(albumPhotos);
      })
      .catch(err => console.error(err));
  }

  // Refreshes the browser window
  refreshPage() {
    window.location = '/';
  };

  // Changes active step to display various pages
  setActiveStep(activeStep, data) {
    if (activeStep === 2) {
      this.setState({
        activeStep,
        loading: true,
        selectedUser: data,
      });

      this.fetchAlbums(data.value);
    } else if (activeStep === 3) {
      this.setState({
        activeStep,
        loading: true,
        selectedAlbum: data,
      });

      this.fetchPictures(data.value);
    }
  };

  render() {
    return (
      <div className="App">
        <h1
          id="appTitle"
          onClick={this.refreshPage}
         >PHOTO VIEWER</h1>
        <div className="MainContent">
          { this.state.activeStep === 1 &&
            <StepOne
              options={this.state.users}
              loading={this.state.loading}
              submit={this.setActiveStep}
            />
          }
          { this.state.activeStep === 2 &&
            <StepTwo
              options={this.state.albums}
              submit={this.setActiveStep}
              loading={this.state.loading}
            />
          }
          { this.state.activeStep === 3 &&
            <div>

            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
