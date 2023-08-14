import { Link } from 'react-router-dom'

import DiveSenseLogo from './DiveSenseLogoSVG'
import ReportSVG from './ReportSVG'
import AnalysisSVG from './AnalysisSVG'

const Header = () => {
  return (
    <header className="flex justify-between border-b-2 border-stone-200 bg-blue-500 p-4 text-lg">
      <div>
        <Link className="flex items-center space-x-2 uppercase text-blue-50" to={'/'}>
          <DiveSenseLogo />
          <span>dive sense</span>
        </Link>
      </div>
      <div className="flex">
        <Link className="me-2 flex items-center space-x-2 pe-3 uppercase text-blue-50" to={'/report'}>
          <ReportSVG />
          <span>report</span>
        </Link>
        <Link className="flex items-center space-x-2 uppercase text-blue-50" to={'/analysis'}>
          <AnalysisSVG />
          <span>analysis</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
