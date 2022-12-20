import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger } from '../Burger';

type TNavigation = {
  type: string;
};

export const Navigation: FC<TNavigation> = ({ type }) => {
  const [burgerActive, setBurgerActive] = useState(false);

  const liClickHandler = () => {
    setBurgerActive(false);
  };

  return (
    <nav className="navigation">
      <ul
        className={`navigation__list ${type ? 'navigation__list_header' : ''} ${
          burgerActive ? 'active' : ''
        }`}>
        <li className={`navigation__li active`} onClick={liClickHandler}>
          <Link to="/">About</Link>
        </li>
        <li className="navigation__li" onClick={liClickHandler}>
          <Link to="/">Map</Link>
        </li>
        <li className="navigation__li" onClick={liClickHandler}>
          <Link to="/">Zoos</Link>
        </li>
        {type && (
          <li className="navigation__li" onClick={liClickHandler}>
            <Link to="/donate">Donate</Link>
          </li>
        )}
        <li className="navigation__li" onClick={liClickHandler}>
          <a href="#contact-us">Contact us</a>
        </li>
      </ul>
      {type && <Burger burgerActive={burgerActive} setBurgerActive={setBurgerActive} />}
    </nav>
  );
};
