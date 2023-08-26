import { Link } from 'react-router-dom';

import { ROOT, REPORT, ANALYSIS } from '@lib/navigation';
import Logo from '../Logo';

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="mb-2 p-1">
        <Link className="flex items-center space-x-2  text-red-50" to={ROOT}>
          <Logo width={96} height={96} />
          <h1 className="p-2 text-center text-2xl leading-10 tracking-tight text-[#952735] sm:leading-none md:text-4xl lg:text-5xl">
            <span className="inline md:block">
              dive<span className="font-extrabold">sense</span>
            </span>
          </h1>
        </Link>
      </div>

      <nav>
        <div className="text-md me-6 flex h-min space-x-2 font-medium text-[#be3144]">
          <Link
            className="me-4 flex items-center space-x-2 border-2 border-transparent border-b-[#dc7986] px-3 uppercase hover:border-2 hover:border-[#dc7986]  hover:text-red-600"
            to={REPORT}
          >
            <span>report</span>
          </Link>
          <Link
            className="items-center space-x-2 border-2 border-transparent border-b-[#dc7986] px-3 uppercase hover:border-2 hover:border-[#dc7986] hover:text-red-600"
            to={ANALYSIS}
          >
            <span>get in the know</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
