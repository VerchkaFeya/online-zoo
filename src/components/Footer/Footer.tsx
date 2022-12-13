import {
  FacebookLogo,
  InstagramLogo,
  Logo,
  TwitterLogo,
  YouTubeLogo,
} from "../../svg";
import { Button } from "../Button/Button";
import { Navigation } from "../Navigation/Navigation";
import { SubscribeForm } from "../SubscribeForm/SubscribeForm";

export const Footer = () => {
  return (
    <footer className="footer" id="contact-us">
      <div className="wrapper footer__wrapper">
        <div className="footer__row1">
          <Logo />
          <SubscribeForm />
        </div>
        <div className="footer__row2">
          <Button form="square">donate for volunteers</Button>
        </div>
        <div className="footer__row3">
          <ul className="footer__socials">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="footer__social-link"
              >
                <FacebookLogo />
                <span className="footer__social-name">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                className="footer__social-link"
              >
                <TwitterLogo />
                <span className="footer__social-name">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="footer__social-link"
              >
                <InstagramLogo />
                <span className="footer__social-name">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                className="footer__social-link"
              >
                <YouTubeLogo />
                <span className="footer__social-name">YouTube</span>
              </a>
            </li>
          </ul>
          <nav className="footer__nav">
            <Navigation type="" />
          </nav>
          <div className="footer__copyright">
            <p>Designed by Alisa Samborskaya</p>
            <p>©RSSchool & ©Yem Digital 2021</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
