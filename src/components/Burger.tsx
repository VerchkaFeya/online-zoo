import { FC, useState } from 'react';

export const Burger: FC<any> = ({ burgerActive, setBurgerActive }) => {
  const burgerHandler = () => {
    burgerActive ? setBurgerActive(false) : setBurgerActive(true);
  };

  return (
    <div className={`burger ${burgerActive ? 'active' : ''}`} onClick={burgerHandler}>
      <span className="burger__line"></span>
    </div>
  );
};
