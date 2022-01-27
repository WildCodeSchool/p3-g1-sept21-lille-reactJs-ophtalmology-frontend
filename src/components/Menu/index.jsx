import { NavLink } from 'react-router-dom';
import SFormMenu from './style';
import MenuBurger from '../MenuBurger';

export default function Menu() {
  return (
    <SFormMenu id="myMenu">
      <MenuBurger />
      <nav className="menu">
        <div className="dropDown">
          <div className="dropContent">Glaucome</div>
          <ul className="dropDownContent">
            <li>
              <NavLink to="/glaucomaSectionZero">En résumé</NavLink>
            </li>
            <li>
              <NavLink to="/glaucomaSectionOne">Les signes du glaucome</NavLink>
            </li>
            <li>
              <NavLink to="/glaucomaSectionTwo">
                Les différentes formes de glaucome
              </NavLink>
            </li>
            <li>
              <NavLink to="/glaucomaSectionThree">
                Quels sont les facteurs de risques ?
              </NavLink>
            </li>
            <li>
              <NavLink to="/glaucomaSectionFour">
                La consultation dans la pathologie glaucomateuse
              </NavLink>
            </li>
            <li>
              <NavLink to="/glaucomaSectionFive">
                Le champ visuel en pratique
              </NavLink>
            </li>
            <li>
              <NavLink to="/glaucomaSectionSix">Les traitements</NavLink>
            </li>
            <li>
              <NavLink to="/glaucomaSectionSeven">Les lasers</NavLink>
            </li>
            <li>
              <NavLink to="/glaucomaSectionEight">
                La chirurgie filtrante
              </NavLink>
            </li>
            <li>
              <NavLink to="/glaucomaSectionNine">
                FAQ : Comment instiller les collyres ? Que puis-je faire ?
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="dropDown">
          <div className="dropContent">Cataracte</div>
          <ul className="dropDownContent">
            <li>
              <NavLink to="/cataractSectionZero">La cataracte</NavLink>
            </li>
            <li>
              <NavLink to="/cataractSectionOne">L&apos;implant</NavLink>
            </li>
            <li>
              <NavLink to="/cataractSectionTwo">
                Les implants multifocaux
              </NavLink>
            </li>
            <li>
              <NavLink to="/cataractSectionThree">
                La cataracte secondaire
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="dropDown">
          <div className="dropContent">Chirurgie réfractive</div>
          <ul className="dropDownContent">
            <li>
              <NavLink to="/refractiveSectionZero">
                Quels sont les défauts de vision corrigés ?
              </NavLink>
            </li>
            <li>
              <NavLink to="/refractiveSectionOne">
                Comment se déroule l’opération ?
              </NavLink>
            </li>
            <li>
              <NavLink to="/refractiveSectionTwo">
                Combien de temps dure la procédure ?
              </NavLink>
            </li>
            <li>
              <NavLink to="/refractiveSectionThree">
                Est-ce que c’est douloureux ?
              </NavLink>
            </li>
            <li>
              <NavLink to="/refractiveSectionFour">
                Quels sont les risques ?
              </NavLink>
            </li>
            <li>
              <NavLink to="/refractiveSectionFive">
                Quels sont les effets indésirables ?
              </NavLink>
            </li>
            <li>
              <NavLink to="/refractiveSectionSix">
                Combien coute la chirurgie LASIK, PKR… ?
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="dropDown">
          <div className="dropContent">À propos</div>
          <ul className="dropDownContent">
            <li>
              <NavLink to="/about">Présentation</NavLink>
            </li>
            <li>Actualités</li>
            <li>Informations pratiques</li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>Liens utiles</li>
            <li>FAQ générale</li>
          </ul>
        </div>
      </nav>
    </SFormMenu>
  );
}
