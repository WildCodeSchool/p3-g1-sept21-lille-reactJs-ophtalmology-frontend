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
              <details>
                <summary>Glaucome</summary>
                <p>
                  <NavLink to="/glaucomaSectionZero"> •En résumé</NavLink>
                </p>
                <p>
                  <NavLink to="/glaucomaSectionOne">
                    • Les signes du glaucome
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/glaucomaSectionTwo">
                    • Les différentes formes de glaucome
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/glaucomaSectionThree">
                    • Quels sont les facteurs de risques ?
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/glaucomaSectionFour">
                    • La consultation dans la pathologie glaucomateuse
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/glaucomaSectionFive">
                    • Le champ visuel en pratique
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/glaucomaSectionSix">• Les traitements</NavLink>
                </p>
                <p>
                  <NavLink to="/glaucomaSectionSeven">• Les lasers</NavLink>
                </p>
                <p>
                  <NavLink to="/glaucomaSectionEight">
                    • La chirurgie filtrante
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/glaucomaSectionNine">
                    • FAQ : Comment instiller les collyres ? Que puis-je faire ?
                  </NavLink>
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary>Cataracte</summary>
                <p>
                  <NavLink to="/cataractSectionZero">• La cataracte</NavLink>
                </p>
                <p>
                  <NavLink to="/cataractSectionOne">• L&apos;implant</NavLink>
                </p>
                <p>
                  <NavLink to="/cataractSectionTwo">
                    • Les implants multifocaux
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/cataractSectionThree">
                    • La cataracte secondaire
                  </NavLink>
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary>• Chirurgie réfractive</summary>
                <p>
                  <NavLink to="/refractiveSectionZero">
                    • Quels sont les défauts de vision corrigés ?
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/refractiveSectionOne">
                    • Comment se déroule l’opération ?
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/refractiveSectionTwo">
                    • Combien de temps dure la procédure ?
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/refractiveSectionThree">
                    • Est-ce que c’est douloureux ?
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/refractiveSectionFour">
                    • Quels sont les risques ?
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/refractiveSectionFive">
                    • Quels sont les effets indésirables ?
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/refractiveSectionSix">
                    • Combien coute la chirurgie LASIK, PKR… ?
                  </NavLink>
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary>&nbsp;À propos</summary>
                <p>
                  <NavLink to="/about">• Présentation</NavLink>
                </p>
                <p>• Actualités</p>
                <p>• Informations pratiques</p>
                <p>
                  <NavLink to="/contact">• Contact</NavLink>
                </p>
                <p>• Liens utiles</p>
                <p>• FAQ générale</p>
              </details>
            </li>
          </ul>
        </Menu>
      </div>
    </SFormMenuBurger>
  );
}
