import { useState } from "react";
import { createPortal } from "react-dom";
import { NavTitle } from "@/utils/enum";
import Link from "./Link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

type Props = {
  isTop: boolean;
};

const stickyNavbar =
  "sticky top-0 bg-amber-100 shadow-md/30 shadow-amber-300 z-100";

const Navbar = ({ isTop }: Props) => {
  const [showH5Menu, setShowH5Menu] = useState(false);
  const handleToggleMenu = () => {
    setShowH5Menu(!showH5Menu);
  };

  const mobileMenu = (
    <Popover open={showH5Menu}>
      <PopoverTrigger onClick={handleToggleMenu}>=</PopoverTrigger>
      <PopoverContent className="flex flex-col">
        {Object.values(NavTitle).map((item) => {
          return (
            <Link key={`${item}-Mobile-Navbar`} link={item} title={item} />
          );
        })}
      </PopoverContent>
    </Popover>
  );
  console.log(showH5Menu, "<<<");
  return (
    <div>
      <nav
        className={`bg-amber-50 md:px-12 py-6 flex items-center justify-center w-full ${isTop ? "" : stickyNavbar}`}
      >
        <div className="flex items-center justify-between w-5/6">
          <div>My Portfolio</div>
          <div className="hidden md:flex gap-4">
            {Object.values(NavTitle).map((item) => {
              return <Link key={`${item}-Navbar`} link={item} title={item} />;
            })}
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden">{mobileMenu}</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
