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
                <summary><NavLink to="/glaucoma">Glaucome</NavLink></summary>
                <p>• En résumé</p>
                <p>• Les signes du glaucome</p>
                <p>• Les différentes formes de glaucome</p>
                <p>• Quels sont les facteurs de risques ?</p>
                <p>• La consultation dans la pathologie glaucomateuse</p>
                <p>• Le Champ Visuel en pratique</p>
                <p>• Les traitements</p>
                <p>• Les lasers</p>
                <p>• La chirurgie filtrante</p>
                <p>
                  • FAQ : Comment instiller les collyres ? Que puis-je faire ?
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <NavLink to="/cataract">Cataracte</NavLink>
                </summary>
                <p>• L’implant : Les implants multifocaux</p>
                <p>• La cataracte secondaire</p>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <NavLink to="/refractive">Chirurgie réfractive</NavLink>
                </summary>
                <p>• Quels sont les défauts de vision corrigés ?</p>
                <p>• Comment se déroule l’opération ?</p>
                <p>• Combien de temps dure la procédure ?</p>
                <p>• Est-ce que c’est douloureux ?</p>
                <p>• Quels sont les risques ?</p>
                <p>• Quels sont les effets indésirables ?</p>
                <p>• Combien coute la chirurgie LASIK, PKR… ?</p>
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
