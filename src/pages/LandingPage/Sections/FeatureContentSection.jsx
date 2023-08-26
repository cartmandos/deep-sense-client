import InfoImg1 from '@assets/images/infographics_01.png';
import InfoImg2 from '@assets/images/infographics_02.png';

export default function FeatureContentSection({
  title,
  content,
  imageSrc,
  imageWidth,
  imageAlignment,
}) {
  return (
    <section className="feature-content bg-main-gray-light">
      <div className="container mx-auto py-16">
        <div className="flex flex-wrap">
          {imageAlignment === 'left' && (
            <div className="w-full lg:w-1/2">
              <div className="p-24">
                <h2 className="mb-4 text-4xl font-bold leading-10 tracking-tight text-primary-text">
                  {title}
                </h2>
                <div className="leading-loose text-red-950">{content}</div>
              </div>
            </div>
          )}

          <div
            className={`flex place-content-center items-center lg:w-1/2 ${
              imageAlignment === 'left' ? 'lg:w-1/2' : 'lg:w-1/2'
            }`}
          >
            <img src={imageSrc} width={imageWidth} height="auto" alt="hero" />
          </div>

          {imageAlignment === 'right' && (
            <div className="w-full lg:w-1/2">
              <div className="p-24">
                <h2 className="mb-4 text-4xl font-bold leading-10 tracking-tight text-primary-text">
                  {title}
                </h2>
                <div className="leading-loose text-red-950">{content}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export const FeatureContentLeftSection = () => {
  return (
    <FeatureContentSection
      title="Uncover Deep Insights for Safer Dives"
      content="Our comprehensive incident analysis empowers you with a deeper understanding of diving risks. 
      Discover trends, precautions, 
      and best practices through visually engaging infographics and detailed data breakdowns."
      imageSrc={InfoImg1}
      imageWidth="400px"
      imageAlignment="left"
    />
  );
};

export const FeatureContentRightSection = () => {
  return (
    <FeatureContentSection
      title="Incident reports can save lives"
      content="Join deepsense and embark on your safer diving journey now. 
      Improve dive planning, form the future of safety guidelines, 
      progress the diving community - through shared knowledge."
      imageSrc={InfoImg2}
      imageWidth="600px"
      imageAlignment="right"
    />
  );
};
