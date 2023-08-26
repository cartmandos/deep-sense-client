import { Link } from 'react-router-dom';

import { ROOT } from '@lib/navigation';
import Logo from '@ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-main-gray-dark py-3">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex items-center justify-center">
          <Link className="justify-center" to={ROOT}>
            <Logo width={42} height={42} />
          </Link>

          <p className="ms-1 mt-1 text-sm text-gray-300">© 2023 DiveSense</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
