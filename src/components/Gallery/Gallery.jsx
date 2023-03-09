import React, { useState } from 'react';
import Lightbox from 'react-spring-lightbox';
import app from '../App.module.css';
import PropTypes from 'prop-types';


const CoolLightbox = ({ links, currentImage, handleClick }) => {
  const images = [];
  links.map(link =>
    images.push({
      src: `../../${link}`,
      loading: 'lazy',
      alt: link,
    })
  );
  const [currentImageIndex, setCurrentIndex] = useState(
    links.indexOf(currentImage)
  );

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  return (
    <Lightbox
      isOpen={true}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
      /* Add your own UI */
      // renderHeader={() => (<CustomHeader />)}
      // renderFooter={() => (<CustomFooter />)}
      renderPrevButton={() =>
        currentImageIndex !== 0 ? (
          <div className={app.gal__btn__wrapper}>
            <button
              className={app.gal__btn}
              onClick={() => {
                gotoPrevious();
              }}
            >
              &lt;
            </button>
          </div>
        ) : (
          ''
        )
      }
      renderNextButton={() =>
        currentImageIndex < images.length - 1 ? (
          <div className={app.gal__btn__wrapper}>
            <button
              className={app.gal__btn}
              onClick={() => {
                gotoNext();
              }}
            >
              &gt;
            </button>
          </div>
        ) : (
          ''
        )
      }
      // renderImageOverlay={() => (<ImageOverlayComponent >)}

      /* Add styling */
      className={app.gal}
      // style={{ background: "grey" }}

      /* Handle closing */
      onClose={() => handleClick('')}
      /* Use single or double click to zoom */
      singleClickToZoom

      /* react-spring config for open/close animation */
      // pageTransitionConfig={{
      //   from: { transform: "scale(0.75)", opacity: 0 },
      //   enter: { transform: "scale(1)", opacity: 1 },
      //   leave: { transform: "scale(0.75)", opacity: 0 },
      //   config: { mass: 1, tension: 320, friction: 32 }
      // }}
    />
  );
};

export default CoolLightbox;

CoolLightbox.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentImage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};