import content from '../assets/data/landingPageContent'
import InfoTab from './InfoTab'

const LandingPage = () => {
  const renderContent = content.map((item) => {
    return <InfoTab title={item.title} description={item.description} key={item} />
  })

  return (
    <main className="flex justify-around">
      <div className="flex w-4/5 flex-col">
        <h1 className="m-2  p-4 text-center text-2xl font-medium text-stone-700 ">
          Dive Sense Annonymoss Incident Reporting and Analysis
        </h1>
        {renderContent}
      </div>
    </main>
  )
}

export default LandingPage
