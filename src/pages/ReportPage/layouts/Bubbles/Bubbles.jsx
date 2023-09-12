import { Oxygen as OxygenSVG } from '@lib/svg/oxygen';

import styles from './Bubbles.module.css';

const Bubbles = () => {
  /** @type {number} */
  const bubblesCount = 15;

  return (
    <div className={`${styles.oxyLarge} fixed h-full w-full overflow-hidden`}>
      <div className={`${styles.oxySmall} relative flex justify-around`}>
        {[...Array(bubblesCount)].map((_, i) => (
          <OxygenSVG key={i} initSize={Math.ceil(Math.random() * 15)} />
        ))}
      </div>
    </div>
  );
};

export default Bubbles;
