import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" href="/">
        Accordion
      </Link>
      <Link className="item" href="/List">
        Search
      </Link>
      <Link className="item" href="/Dropdown">
        Dropdown
      </Link>
      <Link className="item" href="/Translate">
        Translate
      </Link>
    </div>
  );
};

export default Header;
