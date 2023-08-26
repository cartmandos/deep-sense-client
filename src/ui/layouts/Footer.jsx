import { Link } from 'react-router-dom';

import { ROOT } from '@lib/navigation';
import Logo from '@ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-main-gray-dark py-3">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="justify-center sm:flex sm:items-end">
          <Link className="flex justify-center sm:justify-start" to={ROOT}>
            <Logo width={42} height={42} />
          </Link>

          <p className="mb-2 ms-1 text-sm text-gray-300 lg:mt-0 lg:text-right">© 2023 DiveSense</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
