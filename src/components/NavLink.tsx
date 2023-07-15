import React from "react";
import { Link } from "react-router-dom";

interface Props {
  active?: boolean;
  to: string;
}

const NavLink: React.FC<Props> = ({ active, to }) => {
  return (
    <Link
      to={to}
      className={`underline text-sky-20 hover:text-sky-500 ${
        active ? "text-sky-600" : ""
      }`}
    >
      Halo
    </Link>
  );
};

export default NavLink;
