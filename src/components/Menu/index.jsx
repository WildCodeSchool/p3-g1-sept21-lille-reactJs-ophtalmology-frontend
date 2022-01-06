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
            <li>3.1 Les différents types de glaucome</li>
            <li>3.2 Les signes du glaucome</li>
            <li>3.2.1 Quels sont les facteurs de risques ?</li>
            <li>3.3 La consultation dans la pathologie glaucomateuse</li>
            <li>3.4 : le Champ Visuel en pratique</li>
            <li>3.4.1 Les traitements</li>
            <li>3.4.2 les laser</li>
            <li>3.4.3 La chirurgie filtrante</li>
            <li>FAQ : Comment instiller les collyres ? Que puis-je faire ?</li>
          </ul>
        </div>

        <div className="dropDown">
          <div className="dropContent">Cataracte</div>
          <ul className="dropDownContent">
            <li>L’implant : Les implants multifocaux</li>
            <li>La cataracte secondaire</li>
          </ul>
        </div>

        <div className="dropDown">
          <div className="dropContent">Chirurgie rétractive</div>
          <ul className="dropDownContent">
            <li>Quels sont les défauts de vision corrigés ?</li>
            <li>Comment se déroule l’opération ?</li>
            <li>Combien de temps dure la procédure ?</li>
            <li>Est-ce que c’est douloureux ?</li>
            <li>Quels sont les risques ?</li>
            <li>Quels sont les effets indésirables ?</li>
            <li>Combien coute la chirurgie LASIK, PKR… ?</li>
          </ul>
        </div>

        <div className="dropDown">
          <div className="dropContent">À propos</div>
          <ul className="dropDownContent">
            <li>Présentation</li>
            <li>Actualités</li>
            <li>Informations pratiques</li>
            <li>Contact</li>
            <li>Liens utiles</li>
            <li>FAQ générale</li>
          </ul>
        </div>
      </nav>
    </SFormMenu>
  );
}
