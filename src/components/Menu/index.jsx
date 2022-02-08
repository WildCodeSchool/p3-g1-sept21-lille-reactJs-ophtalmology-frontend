import { NavLink } from 'react-router-dom';
import SFormMenu from './style';
import MenuBurger from '../MenuBurger';

export default function Menu() {
  return (
    <SFormMenu id="myMenu">
      <MenuBurger />
      <nav className="menu">
        <div className="dropDown">
          <div className="dropContent">
            <NavLink to="/glaucoma">Glaucome</NavLink>
          </div>
        </div>

        <div className="dropDown">
          <div className="dropContent">
            <NavLink to="/cataract">Cataracte</NavLink>
          </div>
        </div>

        <div className="dropDown">
          <div className="dropContent">
            <NavLink to="/refractive">Chirurgie réfractive</NavLink>
          </div>
        </div>

        <div className="dropDown">
          <div className="dropContent">À propos</div>
          <ul className="dropDownContent">
            <li>
              <NavLink to="/about">Présentation</NavLink>
            </li>
            <li>
              <NavLink to="/videos">Mes vidéos</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </SFormMenu>
  );
}
