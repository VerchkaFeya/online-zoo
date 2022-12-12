import { Logo } from "../../svg";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <div className="header__logo">
          <Logo />
        </div>
        <nav className="header__nav">
          <Navigation type="header" />
        </nav>
        <a href="#" className="header__copyright">
          Designed by ©
        </a>
      </div>
    </header>
  );
};
