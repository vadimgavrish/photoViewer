import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './PhotoScreen.css';

import Button from '../Button/index';
import Loading from '../Loading/index';

class PhotoScreen extends Component {
  render() {
    return (
      <div className='imageGallery'>
        { this.props.loading ?
            <Loading />
          :
            <span>
              <div className='galleryContainer'>
                <ImageGallery
                  showThumbnails={false}
                  items={!this.props.loading && this.props.photos}
                />
              </div>
              <div className='buttonContainer'>
                <Button
                  onClick={this.props.refreshPage}
                >
                  New Search
                </Button>
              </div>
            </span>
        }
      </div>
    );
  }
}

export default PhotoScreen;
