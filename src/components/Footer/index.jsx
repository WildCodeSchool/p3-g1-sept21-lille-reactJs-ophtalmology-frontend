import SFooter from './style';
import Sns from '../Sns';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <SFooter>
      <ul className="footerLinks">
        <li>
          <a
            href="https://www.sfo.asso.fr/grand-public/obligation-dinformation"
            target="_blank"
            rel="noreferrer"
          >
            Société Française d&apos;Ophtalmologie
          </a>
        </li>
        <li>
          <a href="http://www.leglaucome.fr/" target="_blank" rel="noreferrer">
            Société Française du Glaucome
          </a>
        </li>
        <li>
          <a href=" https://www.gatinel.com/" target="_blank" rel="noreferrer">
            Dr. Gatinel
          </a>
        </li>
        <li>
          <a
            href="https://www.institut-laser-vision.paris"
            target="_blank"
            rel="noreferrer"
          >
            Institut Laser Vision
          </a>
        </li>
        <li>
          <a
            href="http://www.fo-rothschild.fr/"
            target="_blank"
            rel="noreferrer"
          >
            Fondation Rothschild
          </a>
        </li>
      </ul>
      <div className="legalNotice">
        <h3>Mentions légales</h3>
        <p>
          Le site a pour but une information médicale accessible au grand public
          afin de faciliter la compréhension de sa pathologie, chirurgie. Il ne
          remplace en aucun cas une consultation médicale, ne peut servir à
          aucun diagnostic ni traitement.
        </p>
      </div>
      <Sns />
      <p className="copyright">
        Docteur Arnaud-Louis Jeannerot © {currentYear} - Tout droits réservés
      </p>
    </SFooter>
  );
}
