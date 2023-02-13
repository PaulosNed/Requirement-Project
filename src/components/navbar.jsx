import React from "react";
import Logo from '../img/logo.png'

function Navbar() {
  return (
    <nav className="bg-orange-500 h-12 flex items-center justify-between">
      <div className="flex items-center">
        <img src="" alt="Logo" className="w-12" />
      </div>
      <div className="flex-1 text-right text-white">
      </div>
    </nav>
  );
}

export default Navbar;
