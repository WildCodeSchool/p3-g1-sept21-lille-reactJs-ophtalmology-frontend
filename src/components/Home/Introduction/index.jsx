import { NavLink } from 'react-router-dom';
import ALJNB from '../../../assets/ALJNB.jpg';
import SIntroduction from './style';

function Introduction() {
  return (
    <SIntroduction>
      <section className="introduction">
        <div className="aljPictureDiv">
          <img src={ALJNB} alt="Dr. Jeannerot" className="aljPicture" />
        </div>
        <div>
          <h3 className="aljTitle">
            Chirurgien ophtalmologiste à la Fondation Ophtalmologique Adolphe de
            Rothschild dans le service du Dr. Gatinel.
          </h3>
          <ul className="aljAchievementsList">
            <li className="aljAchievement">
              - Ancien Interne en Chirurgie des Hôpitaux de Paris.
            </li>
            <li className="aljAchievement">
              - Thèse de Docteur en Médecine avec Médaille d’Argent, sur le
              thème de l’uvéite de Birdshot et les thérapeutiques innovantes
            </li>
            <li className="aljAchievement">
              - Diplôme Universitaire de Glaucome, Neurophtalmologie, cornée,
              histoire de la médecine
            </li>
            <li className="aljAchievement">
              - Membre de la Société Française d’ophtalmologie
            </li>
            <NavLink to="/about" className="learnMoreBtn">
              En savoir plus
            </NavLink>
          </ul>
        </div>
      </section>
    </SIntroduction>
  );
}

export default Introduction;
