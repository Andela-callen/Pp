import React from 'react';
// import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import portfolioImage from '../img/portfolio/portfolioImg';

/**
 * @class Galaimage
 * @extends {React.Component}
 * @render {render()}
 */
class Galaimage extends React.Component {
  state = {
    currentImage: 0
  };

  /**
     *
     * @param {*} event
     * @param {object} obj
     * @returns {function} - setState
     */
  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  /**
     *
     * @returns {function} - setState
     */
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  /**
     *
     * @returns {function} - setState
     */
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  /**
     *
     * @returns {function} - setState
     */
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  /**
   * Renders component
   * @return {XML} JSX
   */
  render() {
    return (
      <div>
        <Gallery photos={portfolioImage} onClick={this.openLightbox} />
        <Lightbox images={portfolioImage}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default Galaimage;
