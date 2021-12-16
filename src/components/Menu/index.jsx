import './style.css';

export default function Menu() {
  return (
    <div className="menu">
      <div className="dropdown">
        <div className="dropbtn">Glaucome</div>
        <div className="dropdown-content">
          <p>3.1 Les différents types de glaucome</p>
          <p>3.2 Les signes du glaucome</p>
          <p>3.2.1 Quels sont les facteurs de risques ?</p>
          <p>3.3 La consultation dans la pathologie glaucomateuse</p>
          <p>3.4 : le Champ Visuel en pratique</p>
          <p>3.4.1 Les traitements</p>
          <p>3.4.2 les laser</p>
          <p>3.4.3 La chirurgie filtrante</p>
          <p>FAQ : Comment instiller les collyres ? Que puis-je faire ?</p>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropbtn">Cataracte</div>
        <div className="dropdown-content">
          <p>L’implant : Les implants multifocaux</p>
          <p>La cataracte secondaire</p>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropbtn">Chirurgie rétractive</div>
        <div className="dropdown-content">
          <p>Quels sont les défauts de vision corrigés ?</p>
          <p>Comment se déroule l’opération ?</p>
          <p>Combien de temps dure la procédure ?</p>
          <p>Est-ce que c’est douloureux ?</p>
          <p>Quels sont les risques ?</p>
          <p>Quels sont les effets indésirables ?</p>
          <p>Combien coute la chirurgie LASIK, PKR… ?</p>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropbtn">À propos</div>
        <div className="dropdown-content">
          <p>Présentation</p>
          <p>Actualités</p>
          <p>Informations pratiques</p>
          <p>Contact</p>
          <p>Liens utiles</p>
          <p>FAQ générale</p>
        </div>
      </div>
    </div>
  );
}
