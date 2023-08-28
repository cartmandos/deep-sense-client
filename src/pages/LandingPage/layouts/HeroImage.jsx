import heroImageXl from '@assets/images/hero-background_01-2560w.jpg';
import heroImageLg from '@assets/images/hero-background_01-1440w.jpg';
import heroImageMd from '@assets/images/hero-background_01-1024w.jpg';
import heroImageSm from '@assets/images/hero-background_01-480w.jpg';

const HeroImage = () => {
  const imageSources = [
    { src: heroImageSm, size: 480 },
    { src: heroImageMd, size: 1024 },
    { src: heroImageLg, size: 1440 },
    { src: heroImageXl, size: 2560 },
  ];

  return (
    <img
      className="h-full object-cover object-left-top"
      width="100%"
      src={imageSources[0].src}
      alt="hero"
      srcSet={imageSources.map((image) => `${image.src} ${image.size}w`).join(', ')}
    />
  );
};

export default HeroImage;
