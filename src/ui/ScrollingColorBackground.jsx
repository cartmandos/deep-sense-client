import { useEffect, useState } from 'react';

//TODO: change hard-coded color to prop
/**
 * @param {{ children: React.ReactNode }} props
 */
const ScrollBackgroundWrapper = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-background-wrapper relative"
      style={{
        backgroundColor: `rgba(33,33,33,${scrollPosition / 4000})`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollBackgroundWrapper;
