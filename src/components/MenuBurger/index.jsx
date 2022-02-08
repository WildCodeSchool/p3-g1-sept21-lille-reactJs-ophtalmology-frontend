import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import SFormMenuBurger from './style';

export default function MenuBurger() {
  return (
    <SFormMenuBurger id="myMenuBurger">
      <div className="menuBurger">
        <Menu>
          <ul>
            <li>
              <NavLink to="/glaucoma" className="navLink">
                Glaucome
              </NavLink>
            </li>
            <li>
              <NavLink to="/cataract" className="navLink">
                Cataracte
              </NavLink>
            </li>
            <li>
              <NavLink to="/refractive" className="navLink">
                Chirurgie réfractive
              </NavLink>
            </li>
            <li>
              <details>
                <summary>&nbsp;À propos</summary>
                <p>
                  <NavLink to="/about">• Présentation</NavLink>
                </p>
                <p>
                  <NavLink to="/videos">• Mes vidéos</NavLink>
                </p>
                <p>
                  <NavLink to="/contact">• Contact</NavLink>
                </p>
              </details>
            </li>
          </ul>
        </Menu>
      </div>
    </SFormMenuBurger>
  );
}
