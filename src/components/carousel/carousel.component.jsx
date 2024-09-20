import { useState } from 'react';

import {
  Container,
  Image,
  PreviousIcon,
  NextIcon,
  CountDotContainer,
  CountDot,
  CountDotActive,
} from './carousel.styles';

import Image1 from '../../assets/images/img1.png';
import Image2 from '../../assets/images/img2.png';
import Image3 from '../../assets/images/img3.png';
import Image4 from '../../assets/images/img4.png';

const Carousel = ({ images = [Image1, Image2, Image3, Image4] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const prevSlide = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex === images.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  const onCountDotClick = (idx) => {
    setCurrentIndex(idx);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const swipeDistance = touchStart - touchEnd;

    if (swipeDistance > 50) {
      nextSlide();
    } else if (swipeDistance < -50) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  return (
    <Container
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.length === 1 ? (
        <Image src={images[0]} />
      ) : (
        <>
          <Image src={images[currentIndex]} />
          {currentIndex !== 0 && (
            <button type="button" onClick={prevSlide}>
              <PreviousIcon />
            </button>
          )}

          {currentIndex !== images.length - 1 && (
            <button type="button" onClick={nextSlide}>
              <NextIcon />
            </button>
          )}

          <CountDotContainer>
            {images.map((_, idx) =>
              currentIndex === idx ? (
                <CountDotActive type="button" key={idx} />
              ) : (
                <CountDot
                  type="button"
                  key={idx}
                  onClick={() => onCountDotClick(idx)}
                />
              )
            )}
          </CountDotContainer>
        </>
      )}
    </Container>
  );
};

export default Carousel;
