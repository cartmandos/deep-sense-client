import { EyeSlashIcon, UserGroupIcon, MagnifyingGlassIcon } from '@lib/svg/icons';

export default function HighlightsSection() {
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
}
