import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState<string>("");

  const handleClickLogo = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 py-5 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => handleClickLogo()}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            William{" "}
            <span className="sm:block hidden">| Javascript Mastery</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10"></ul>
      </div>
    </nav>
  );
};

export default Navbar;
