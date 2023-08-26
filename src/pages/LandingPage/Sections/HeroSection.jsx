import { Link } from 'react-router-dom';

import { REPORT } from '@lib/navigation';

export default function HeroSection() {
  return (
    <section className="hero flex h-full items-center">
      <div className="ms-12 mt-16 text-white">
        <h2 className="mb-2 text-5xl font-medium tracking-tight">You&apos;re not alone</h2>
        <h3 className="mb-6 text-4xl font-thin">
          Mistakes are inevitable,
          <br />
          repeating them is avoidable.
        </h3>
        <h4 className="mb-6 text-xl font-semibold">Join our buddy of knowledge</h4>
        <CTAHeroButton />
      </div>
    </section>
  );
}

const CTAHeroButton = () => {
  return (
    <Link
      to={REPORT}
      type="button"
      className="hero-cta rounded-lg border-2 border-main-red-light bg-main-red-light bg-opacity-30 p-3 text-lg font-medium uppercase leading-normal text-neutral-300 transition duration-150 ease-in-out hover:border-main-red-dark hover:bg-main-red-dark hover:bg-opacity-60 hover:text-neutral-200  focus:border-neutral-50 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      Report
    </Link>
  );
};
