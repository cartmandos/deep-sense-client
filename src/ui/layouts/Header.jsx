import { Link } from 'react-router-dom';

import { ROOT, REPORT, ANALYSIS } from '@lib/navigation';
import { Logo } from '@lib/svg/logo';

const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between bg-transparent">
      <div className="mb-2 p-1">
        <Link className="flex items-center space-x-2  text-red-50" to={ROOT}>
          <Logo width={96} height={96} />
          <h1 className="p-2 text-center text-4xl leading-10 tracking-tight text-main-red-dark sm:leading-none md:text-5xl">
            <span className="inline md:block">
              dive<span className="font-extrabold">sense</span>
            </span>
          </h1>
        </Link>
      </div>

      <nav className="w-full sm:w-max">
        <div className="text-md mb-2 flex h-min justify-center space-x-2 p-2 font-medium text-secondary-red-dark sm:me-6">
          <Link
            className="me-4 flex items-center space-x-2 border-2 border-transparent border-b-secondary-red-light px-3 uppercase hover:border-2 hover:border-secondary-red-light  hover:text-red-600"
            to={REPORT}
          >
            <span>report</span>
          </Link>
          <Link
            className="items-center space-x-2 border-2 border-transparent border-b-secondary-red-light px-3 uppercase hover:border-2 hover:border-secondary-red-light hover:text-red-600"
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
