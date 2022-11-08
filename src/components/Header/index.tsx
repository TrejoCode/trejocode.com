/**
 * @description Componente <Header />
 */

import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';
import Brackets from 'assets/icons/header/logo/brackets-web.svg';

const Header = (): JSX.Element => {
  return (
    <div className="header w-full flex justify-center border-b border-b-neutral-200">
      <div className="container flex justify-between py-4">
        <div className="logo">
          <Link href="/" title="Ir a la página de inicio">
            <Image src={Brackets} alt="Trejocode logo" className="w-12 h-12 lg:w-16 lg:h-16" />
          </Link>
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
