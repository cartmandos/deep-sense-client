import InfoImg1 from '@assets/images/infographics_01.png';
import InfoImg2 from '@assets/images/infographics_02.png';
import diverIcon from '@assets/icons/diver-vertical.svg';

export const HeroSection = () => {
  return (
    <section className="hero flex h-full items-center">
      <div className="ms-12 mt-16 text-white">
        <h2 className="mb-4 text-6xl font-semibold">Heading</h2>
        <h4 className="mb-6 text-2xl font-semibold">
          Mistakes are inevitable,
          <br />
          learning from them is not.
        </h4>
        <div className="">
          <button
            type="button"
            className="rounded-full border-2 border-[#d25062] p-4 text-lg font-medium uppercase leading-normal text-[#d25062] transition duration-150 ease-in-out hover:border-[#dc7986] hover:bg-[#952735] hover:bg-opacity-10 hover:text-[#dc7986] focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Report
          </button>
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
          <div className="w-full px-12 py-2 lg:w-1/3">
            <div className="flex items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full text-white">
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14-14 14z" />
                  <path d="M16 4a1 1 0 00-1 1v11.586l-3.293-3.293a.999.999 0 10-1.414 1.414l5 5a.999.999 0 001.414 0l5-5a.999.999 0 10-1.414-1.414L17 16.586V5a1 1 0 00-1-1z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-neutral-50">Heading</h4>
            </div>

            <p className="leading-loose text-neutral-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            </p>
          </div>

          <div className="w-full bg-[#be3144] px-14 py-2 lg:w-1/3">
            <div className="flex items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full text-white">
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14-14 14z" />
                  <path d="M16 4a1 1 0 00-1 1v11.586l-3.293-3.293a.999.999 0 10-1.414 1.414l5 5a.999.999 0 001.414 0l5-5a.999.999 0 10-1.414-1.414L17 16.586V5a1 1 0 00-1-1z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-neutral-50">Heading</h4>
            </div>

            <p className="leading-loose text-neutral-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            </p>
          </div>

          <div className="w-full px-12 py-2 lg:w-1/3">
            <div className="flex items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full text-white">
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14-14 14z" />
                  <path d="M16 4a1 1 0 00-1 1v11.586l-3.293-3.293a.999.999 0 10-1.414 1.414l5 5a.999.999 0 001.414 0l5-5a.999.999 0 10-1.414-1.414L17 16.586V5a1 1 0 00-1-1z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-neutral-50">Heading</h4>
            </div>

            <p className="leading-loose text-neutral-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
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
                Heading
              </h2>
              <div className="leading-loose text-red-950">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <p>
                  Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus. Suspendisse
                  potenti. Donec sit amet diam eu dolor tincidunt tristique.
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
                Heading
              </h2>
              <p className="leading-loose text-red-950">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque
                ligula sagittis faucibus eget quis lacus. Suspendisse potenti. Donec sit amet diam
                eu dolor tincidunt tristique.
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
            Heading
          </h2>
          <div className="text-lg leading-loose text-[#952735]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <p>
              Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus. Suspendisse
              potenti. Donec sit amet diam eu dolor tincidunt tristique.
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
          <button
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
          </button>
        </div>
      </div>
      <hr className="text-white" />
    </section>
  );
};
