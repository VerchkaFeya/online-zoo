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
      <div className="wrapper">
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
              <FacebookLogo />
              <a href="https://www.facebook.com" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <TwitterLogo />
              <a href="https://twitter.com" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <InstagramLogo />
              <a href="https://www.instagram.com" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <YouTubeLogo />
              <a href="https://www.youtube.com" target="_blank">
                YouTube
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
