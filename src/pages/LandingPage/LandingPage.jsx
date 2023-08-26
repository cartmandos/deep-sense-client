import {
  HeroSection,
  HighlightsSection,
  FeatureContentLeftSection,
  FeatureFocusSection,
  FeatureContentRightSection,
  CTASection,
} from './Sections';

import heroBgImg from '@assets/images/hero-background_03.jpg';

//TODO: 1. lazy loading w/ suspense
const LandingPage = () => {
  const withBackground = (Component) => {
    return (
      <div
        className="hero-shot relative overflow-hidden bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBgImg})`, height: '80vh' }}
        // bg-[url('https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop')]"
      >
        <div className="hero-overlay absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-opacity-70 bg-fixed">
          <Component />
        </div>
      </div>
    );
  };

  return (
    <>
      {withBackground(HeroSection)}

      <HighlightsSection />
      <FeatureContentLeftSection />
      <FeatureFocusSection />
      <FeatureContentRightSection />
      <CTASection />
    </>
  );
};

export default LandingPage;
