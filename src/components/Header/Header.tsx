import { LogoHeader } from "../../svg";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <div className="header__logo">
          <LogoHeader />
        </div>
        <nav className="header__nav">
          <Navigation />
        </nav>
        <p className="header__copyright">Designed by Vera Krasnova ©</p>
      </div>
    </header>
  );
}