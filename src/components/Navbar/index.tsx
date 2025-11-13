import { useState } from 'react';
import { PageID } from '@/utils/enum';
import Link from './Link';
import { Menu, X } from 'lucide-react';
type Props = {
  isTop: boolean;
};

const stickyNavbar =
  'sticky top-0 bg-sky-100 shadow-md/30 shadow-sky-300 z-100';

const Navbar = ({ isTop }: Props) => {
  const [showH5Menu, setShowH5Menu] = useState(false);
  const handleToggleMenu = () => {
    setShowH5Menu(!showH5Menu);
  };
  console.log(isTop, 'isTop', stickyNavbar);
  return (
    <>
      <nav
        className={`bg-sky-100 md:px-12 py-6 flex items-center justify-center w-full ${isTop ? '' : stickyNavbar}`}
      >
        <div className="flex items-center justify-end md:justify-center w-5/6">
          <div className="hidden md:flex gap-4">
            {Object.values(PageID).map((item) => {
              return <Link key={`${item}-Navbar`} link={item} title={item} />;
            })}
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={handleToggleMenu}>
              <Menu />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {showH5Menu && (
        <div
          className="fixed inset-0 z-100 bg-black opacity-50"
          onClick={handleToggleMenu}
        />
      )}
      <nav
        className={`fixed top-0 left-0 z-200 w-2/3 h-full rounded-xl transform transition-transform duration-600 bg-sky-200 flex flex-col ${showH5Menu ? '-translate-x-2.5' : '-translate-x-full'}`}
      >
        <div className="m-6 flex justify-end items-end">
          <button onClick={handleToggleMenu}>
            <X />
          </button>
        </div>
        <ul className="flex flex-col m-8 p-8 gap-12 font-bold">
          {Object.values(PageID).map((item) => {
            return (
              <li onClick={handleToggleMenu} key={`${item}-mobile_navbar`}>
                <Link key={`${item}-Navbar`} link={item} title={item} />
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
