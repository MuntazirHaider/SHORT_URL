import { React } from "react";
import img from "../images/logo.png";

function Navbar() {
  return (
    <nav className="navbar border">
      <div className="">
        <a className="navbar-brand" href="/">
          <img
            src={img}
            alt="logo"
            width={95}
            height={60}
            className="m-2"
          />
        </a>
      </div>

    </nav>

  )
};

export default Navbar;
