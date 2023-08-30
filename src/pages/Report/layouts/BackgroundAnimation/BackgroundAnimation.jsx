import OxygenSVG from '../../../../lib/svg/OxygenSVG';

import './backgroundAnimation.css';

export const BackgroundAnimation = () => {
  // console.log('Bubbles animation triggered');
  return (
    <div className="oxy-lg fixed h-full w-full overflow-hidden">
      <div className="oxy-sm relative flex justify-around">
        <OxygenSVG initSize={13} />
        <OxygenSVG initSize={9} />
        <OxygenSVG initSize={12} />
        <OxygenSVG initSize={15} />
        <OxygenSVG initSize={9} />
        <OxygenSVG initSize={5} />
        <OxygenSVG initSize={8} />
        <OxygenSVG initSize={10} />
        <OxygenSVG initSize={17} />
        <OxygenSVG initSize={9} />
        <OxygenSVG initSize={11} />
        <OxygenSVG initSize={5} />
        <OxygenSVG initSize={15} />
        <OxygenSVG initSize={8} />
        <OxygenSVG initSize={10} />
      </div>
    </div>
  );
};
