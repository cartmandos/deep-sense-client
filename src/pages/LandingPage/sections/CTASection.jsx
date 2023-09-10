import { Link } from 'react-router-dom';

import { ANALYSIS } from '@lib/navigation';
import diverIcon from '@assets/icons/diver-vertical.svg';

export default function CTASection() {
  return (
    <section className="bottom-cta bg-main-gray-dark">
      <div className="mx-auto max-w-lg px-4 py-12 pt-24 text-left md:max-w-none md:text-center">
        <h1 className="text-center text-4xl font-extrabold leading-10 tracking-tight text-white sm:leading-none md:text-6xl lg:text-7xl">
          <span className=" mt-2 bg-gradient-to-r from-secondary-red-dark via-main-red-light to-secondary-red-light bg-clip-text text-transparent md:inline-block">
            Make Sense of&nbsp;
            <span className="bg-gradient-to-r from-secondary-red-light to-main-red-dark bg-clip-text">
              your Dives
            </span>
          </span>
        </h1>
        <div className="mx-auto mt-5 rounded-lg text-center font-medium text-zinc-400 md:mt-12 md:max-w-lg lg:text-lg">
          <CTAFooterButton />
        </div>
      </div>
      <hr className="text-white" />
    </section>
  );
}

const CTAFooterButton = () => {
  return (
    <Link
      to={ANALYSIS}
      type="button"
      className="rounded-full border-2 px-7 py-3 text-sm text-neutral-50 hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <span>Dive In</span>
      <img
        className="ml-4 inline-block -rotate-90 invert filter"
        src={diverIcon}
        width="20"
        height="20"
        alt="diver"
      />
    </Link>
  );
};
