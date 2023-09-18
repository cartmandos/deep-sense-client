// import { BackgroundCardImg } from './BackgroundCardImg.style.';

// TODO: separate carousel creation function and creation data

const Carousel = ({ criteria, view, setView }) => {
  const handleNext = () => {
    const index = criteria.indexOf(view);
    index + 1 === criteria.length ? setView(criteria[0]) : setView(criteria[index + 1]);
  };

  const handlePrev = () => {
    const index = criteria.indexOf(view);
    index === 0 ? setView(criteria[criteria.length - 1]) : setView(criteria[index - 1]);
  };

  return (
    <div className="carousel flex w-full justify-center">
      <div className="carousel-item relative h-[25vh] w-full">
        {/* <BackgroundCardImg imageUrl={item.imgSrc} alt={item.imgAlt} /> */}
        <div className="hero-overlay absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col justify-between overflow-hidden bg-gray-800 bg-opacity-70 bg-fixed p-3 text-center">
          <h2 className="text-3xl text-slate-100">{view}</h2>
          <p className="text-sm text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, repudiandae.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={() => handlePrev()}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={() => handleNext()}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
