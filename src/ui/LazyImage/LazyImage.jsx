import { useState } from 'react';

/**
 * @param {{ src: string, alt: string, width: number, height: number, blur: boolean }} props
 */
export default function LazyImage({ src, alt, width, height }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${imageLoaded ? '' : 'blur'}`}
      onLoad={() => setImageLoaded(true)}
    />
  );
}
