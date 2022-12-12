import { FC } from "react";
import { Link } from "react-router-dom";

type TNavigation = {
  type: string;
};

export const Navigation: FC<TNavigation> = ({ type }) => {
  return (
    <ul className="navigation">
      <li className="navigation__li active">
        <Link to="/">About</Link>
      </li>
      <li className="navigation__li">
        <Link to="/">Map</Link>
      </li>
      <li className="navigation__li">
        <Link to="/">Zoos</Link>
      </li>
      {type && (
        <li className="navigation__li">
          <Link to="/donate">Donate</Link>
        </li>
      )}
      <li className="navigation__li">
        <a href="#contact-us">Contact us</a>
      </li>
    </ul>
  );
};
