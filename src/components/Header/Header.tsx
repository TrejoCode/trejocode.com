import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
import { useLocalImage } from 'hooks/useLocalImages';

const Header = () => {
  const images = useLocalImage();
  return (
    <div className="header flex w-full justify-center border-b border-b-neutral-200">
      <div className="container flex justify-between py-4">
        <div className="logo">
          <Link
            href="/"
            title="Ir a la página de inicio"
            className="focus:outline-info-base flex rounded-sm outline-2 outline-transparent focus:outline-dashed"
          >
            <Image src={images.bracket} alt="Trejocode logo" className="h-12 w-12 lg:h-16 lg:w-16" />
          </Link>
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
