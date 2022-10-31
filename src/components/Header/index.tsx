/**
 * @description Componente <Header />
 */

import Image from 'next/image';
import Nav from './Nav';
import Brackets from 'assets/icons/header/logo/brackets-web.svg';

const Header = (): JSX.Element => {
  return (
    <div className="header w-full flex justify-center border-b border-b-neutral-200">
      <div className="container flex justify-between py-4">
        <div className="logo">
          <Image src={Brackets} alt="Trejocode logo" className="w-12 h-12 lg:w-16 lg:h-16" />
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
