import React, { useState } from 'react';
import Lightbox from 'react-spring-lightbox';
import app from './App.module.css'

const CoolLightbox = ({ links, currentImage, updateLightBox }) => {
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
    console.log('currentImageIndex', currentImageIndex);
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
      renderPrevButton={() => (<button className={app.galButton} onClick={()=>{gotoPrevious()}}> - </button>)}
        renderNextButton={() => ( <button className={app.galButton} onClick={()=>{gotoNext()}}> + </button> )}
      // renderImageOverlay={() => (<ImageOverlayComponent >)}

      /* Add styling */
      className={app.gal}
      // style={{ background: "grey" }}

      /* Handle closing */
      onClose={()=>updateLightBox(false)}

      /* Use single or double click to zoom */
      // singleClickToZoom

      /* react-spring config for open/close animation */
      //   pageTransitionConfig={{
      //     from: { transform: "scale(0.75)", opacity: 0 },
      //     enter: { transform: "scale(1)", opacity: 1 },
      //     leave: { transform: "scale(0.75)", opacity: 0 },
      //     config: { mass: 1, tension: 320, friction: 32 }
      //   }}
    />
  );
};

export default CoolLightbox;
