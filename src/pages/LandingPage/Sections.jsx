import { Link } from 'react-router-dom';

import { ANALYSIS, REPORT } from '@lib/navigation';
import InfoImg1 from '@assets/images/infographics_01.png';
import InfoImg2 from '@assets/images/infographics_02.png';
import diverIcon from '@assets/icons/diver-vertical.svg';

export const HeroSection = () => {
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
        <div className="">
          <Link
            to={REPORT}
            type="button"
            className="rounded-lg border-2 border-[#d25062] bg-[#d25062] bg-opacity-30 p-3 text-lg font-medium uppercase leading-normal text-neutral-300 transition duration-150 ease-in-out hover:border-[#952735] hover:bg-[#952735] hover:bg-opacity-60 hover:text-neutral-200  focus:border-neutral-50 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Report
          </Link>
        </div>
      </div>
    </section>
  );
};

export const HighlightsSection = () => {
  return (
    <section className="feature-highlights">
      <div className="mx-auto bg-[#d25062] px-8">
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-4 w-full px-24 py-2 lg:w-1/3">
            <div className="flex items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full text-white">
                <EyeSlashIcon />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-neutral-50">Anonymity</h4>
            </div>

            <p className="px-4 leading-loose text-neutral-50">
              Share diving experience without fear, creating a culture of safety diving driven by
              real-world data.
            </p>
          </div>

          <div className="w-full bg-[#be3144] px-24 py-2 lg:w-1/3">
            <div className="flex items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full text-white">
                <UserGroupIcon />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-neutral-50">Community</h4>
            </div>

            <p className="px-4 leading-loose text-neutral-50">
              Uncover the untold stories, and be a part of a community that values transparency and
              growth.
            </p>
          </div>

          <div className="w-full px-24 py-2 lg:w-1/3">
            <div className="flex items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full text-white">
                <MagnifyingGlassIcon />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-neutral-50">Insights</h4>
            </div>

            <p className="px-4 leading-loose text-neutral-50">
              Gain valuable insights by learning from others&apos; experiences and make better
              informed decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeatureContentLeftSection = () => {
  return (
    <section className="feature-content bg-[#e6e6e6]">
      <div className="container mx-auto py-16">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="p-24">
              <h2 className="mb-4 text-4xl font-bold leading-10 tracking-tight text-[#3b0f15]">
                Uncover Deep Insights for Safer Dives
              </h2>
              <div className="leading-loose text-red-950">
                Our comprehensive incident analysis empowers you with a deeper understanding of
                diving risks.
                <p>
                  Discover trends, precautions, and best practices through visually engaging
                  infographics and detailed data breakdowns.
                </p>
              </div>
            </div>
          </div>

          <div className="flex place-content-center items-center lg:w-1/2">
            <img src={InfoImg1} width="300px" height="100%" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeatureContentRightSection = () => {
  return (
    <section className="feature-content bg-[#e6e6e6]">
      <div className="container mx-auto py-16">
        <div className="flex flex-wrap">
          <div className="flex w-full items-center p-8 lg:w-1/2">
            <img src={InfoImg2} width="500px" height="100%" alt="hero" />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="p-24">
              <h2 className="mb-4 text-4xl font-bold leading-10 tracking-tight text-[#3b0f15]">
                Incident reports can save lives
              </h2>
              <p className="leading-loose text-red-950">
                Join deep<b>sense</b> and embark on your safer diving journey now. Improve dive
                planning, form the future of safety guidelines, progress the diving community -
                through shared knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeatureInsightsSection = () => {
  return (
    <section className="feature-insights">
      <div className="container mx-auto text-center">
        <div className="p-20">
          <h2 className="mb-4 text-5xl font-bold leading-10 tracking-tight text-[#4a131a]">
            Your Stories, Our Progress
          </h2>
          <div className="text-lg leading-loose text-[#952735]">
            Your voice contributes to a data-driven transformation that benefits the entire diving
            community.
            <p>
              Be a driving force behind safer diving practices, community development, and lives
              saved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CTASection = () => {
  return (
    <section className="bottom-cta bg-[#212121]">
      <div className="mx-auto max-w-lg px-4 py-12 pt-24 text-left md:max-w-none md:text-center">
        <h1 className="text-center text-4xl font-extrabold leading-10 tracking-tight text-white sm:leading-none md:text-6xl lg:text-7xl">
          {/* <span className="inline md:block">Join Us</span> */}
          <span className=" mt-2 bg-gradient-to-r from-[#be3144] via-[#d25062] to-[#dc7986] bg-clip-text text-transparent md:inline-block">
            Make&nbsp;Sense&nbsp;of&nbsp;
            <span className="bg-gradient-to-r from-[#dc7986] to-[#952735] bg-clip-text">
              your&nbsp;Dives
            </span>
          </span>
        </h1>
        <div className="mx-auto mt-5 rounded-lg text-center font-medium text-zinc-400 md:mt-12 md:max-w-lg lg:text-lg">
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
            />
          </Link>
        </div>
      </div>
      <hr className="text-white" />
    </section>
  );
};

const EyeSlashIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
};

const UserGroupIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>
  );
};

const MagnifyingGlassIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};
