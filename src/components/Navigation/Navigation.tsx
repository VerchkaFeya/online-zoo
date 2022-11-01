import { FC } from "react";

type TNavigation = {
  type: string;
};

export const Navigation: FC<TNavigation> = ({ type }) => {
  return (
    <ul className="navigation">
      <li className="navigation__li active">
        <a href="about">About</a>
      </li>
      <li className="navigation__li">
        <a href="map">Map</a>
      </li>
      <li className="navigation__li">
        <a href="zoos">Zoos</a>
      </li>
      {type && (
        <li className="navigation__li">
          <a href="donate">Donate</a>
        </li>
      )}
      <li className="navigation__li">
        <a href="contact-us">Contact us</a>
      </li>
    </ul>
  );
};
