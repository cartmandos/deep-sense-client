import content from '../assets/data/landingPageContent'
import InfoTab from './InfoTab'

const LandingPage = () => {
  const renderContent = content.map((item) => {
    return <InfoTab title={item.title} description={item.description} key={item} />
  })

  return (
    <div>
      <h1>LandingPage</h1>
      {renderContent}
    </div>
  )
}

export default LandingPage
