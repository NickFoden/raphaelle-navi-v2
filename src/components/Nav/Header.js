import { Link } from "react-navi";
import * as React from "react";
import "./styles.css";

function Header() {
  return (
    <header className="header">
      <Link className="title" href="/">
        Dinah Raphaelle
      </Link>
      <Link className="links" href="/hair">
        HairStylist
      </Link>
      <Link className="links" href="/makeup">
        Makeup
      </Link>
      <Link className="links" href="/about">
        About
      </Link>
    </header>
  );
}

export default Header;
