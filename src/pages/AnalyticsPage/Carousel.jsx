import { BackgroundCardImg } from './BackgroundCardImg.style.';

import heroImageXl from '@assets/images/hero-background_01-2560w.jpg';
import heroImageLg from '@assets/images/hero-background_01-1440w.jpg';
import heroImageMd from '@assets/images/hero-background_01-1024w.jpg';
import heroImageSm from '@assets/images/hero-background_01-480w.jpg';

// TODO: separate carousel creation function and creation data

const Carousel = ({ setView }) => {
  // TODO: change/add views
  const CAROUSEL_DATA = [
    { imgSrc: heroImageLg, imgAlt: 'img1', view: 'main' },
    { imgSrc: heroImageMd, imgAlt: 'img2', view: 'countries' },
    { imgSrc: heroImageSm, imgAlt: 'img3', view: 'injuries' },
    { imgSrc: heroImageXl, imgAlt: 'img4', view: 'experience' },
  ];

  const leftClickHandler = (index) => {
    index === 0
      ? setView(CAROUSEL_DATA[CAROUSEL_DATA.length - 1].view)
      : setView(CAROUSEL_DATA[index - 1].view);
  };
  const rightClickHandler = (index) => {
    index + 1 === CAROUSEL_DATA.length
      ? setView(CAROUSEL_DATA[0].view)
      : setView(CAROUSEL_DATA[index + 1].view);
  };

  const carouselItems = CAROUSEL_DATA.map((item, index) => {
    return (
      <div key={item.view} id={`slide${index + 1}`} className="carousel-item relative w-full ">
        <BackgroundCardImg
          imageUrl={item.imgSrc}
          alt={item.imgAlt}
          className="flex flex-col justify-end p-3"
        >
          <h1 className="text-lg uppercase text-slate-100">{item.view}</h1>
          <p className="text-sm text-slate-200 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, repudiandae.
          </p>
        </BackgroundCardImg>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          {/* REVIEW: decide between controlling with url params or state */}
          <a
            href={index === 0 ? `#slide${CAROUSEL_DATA.length}` : `#slide${index}`}
            className="btn btn-circle"
            onClick={() => leftClickHandler(index)}
          >
            ❮
          </a>
          <a
            href={index + 1 === CAROUSEL_DATA.length ? `#slide${1}` : `#slide${index + 2}`}
            className="btn btn-circle"
            onClick={() => rightClickHandler(index)}
          >
            ❯
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-center">
      <div className="carousel w-3/5">{carouselItems}</div>
    </div>
  );
};

export default Carousel;
