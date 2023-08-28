import { EyeSlashIcon, UserGroupIcon, MagnifyingGlassIcon } from '@lib/svg/Icons';

export default function HighlightsSection() {
  return (
    <section className="feature-highlights">
      <div className="mx-auto">
        <div className="flex flex-wrap">
          <HighlightBox
            icon={<EyeSlashIcon />}
            title="Anonymity"
            content="Share diving experience without fear, creating a culture of safety diving driven by
            real-world data."
            bgColor="bg-main-red-light"
          />

          <HighlightBox
            icon={<UserGroupIcon />}
            title="Community"
            content="Uncover the untold stories, and be a part of a community that values transparency and growth."
            bgColor="bg-secondary-red-dark"
          />

          <HighlightBox
            icon={<MagnifyingGlassIcon />}
            title="Insights"
            content="Gain valuable insights by learning from others' experiences and make better
            informed decisions."
            bgColor="bg-main-red-light"
          />
        </div>
      </div>
    </section>
  );
}

const HighlightBox = ({ icon, title, content, bgColor }) => {
  return (
    <div className={`${bgColor} w-full px-20 pb-4 pt-2 lg:w-1/3`}>
      <div className="flex items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full text-white">
          {icon}
        </div>
        <h4 className="text-xl font-semibold text-neutral-50">{title}</h4>
      </div>

      <p className="px-4 leading-loose text-neutral-50">{content}</p>
    </div>
  );
};
