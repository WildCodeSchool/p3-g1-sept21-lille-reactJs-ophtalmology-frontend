import { NavLink } from 'react-router-dom';
import DrJeannerotLogo from '../../assets/DrJeannerotLogo.png';
import SHeader from './style';

function Header() {
  return (
    <SHeader>
      <header className="header">
        <div className="headerLogoContainer">
          <NavLink to="/">
            <img
              src={DrJeannerotLogo}
              alt="Dr.Jeannerot Logo"
              className="headerLogo"
            />
          </NavLink>
        </div>

        <div className="headerCatContainer">
          <NavLink to="/contact" className="headerCat">
            <p>Contact</p>
          </NavLink>

          <a
            href="https://www.doctolib.fr/ophtalmologue/paris/arnaud-louis-jeannerot"
            target="_blank"
            className="headerCat"
            rel="noreferrer"
          >
            Doctolib
          </a>
        </div>
      </header>
    </SHeader>
  );
}

export default Header;
