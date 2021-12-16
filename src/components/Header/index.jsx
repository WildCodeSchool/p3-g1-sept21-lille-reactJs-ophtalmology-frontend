import { NavLink } from 'react-router-dom';
import DrJeannerotLogo from '../../assets/DrJeannerotLogo.png';
// import { StyleHeader } from './style.jsx';

function Header() {
  return (
    <>
      <div className="header">
        <div className="headerLogoCat">
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
      </div>
    </>
  );
}

export default Header;
