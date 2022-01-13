import { useState } from 'react';
import ALJNB from '../../../assets/ALJNB.jpg';
import SIntroduction from './style';

function Introduction() {
  const [slidePicture, setSlidePicture] = useState(false);
  const showSlidePicture = () => setSlidePicture(!slidePicture);

  const [introText, setIntroText] = useState(false);
  const showIntroText = () => setIntroText(!introText);

  return (
    <SIntroduction>
      <section className={slidePicture ? 'introductionSlide' : 'introduction'}>
        <div className="aljPictureDiv">
          <img src={ALJNB} alt="Dr. Jeannerot" className="aljPicture" />
          <div className="aljTitleOverlay">
            <div className="aljTitle">
              <h3>
                Chirurgien ophtalmologiste à la Fondation Ophtalmologique
                Adolphe de Rothschild dans le service du Dr. Gatinel.
              </h3>
              <button
                type="button"
                className={
                  slidePicture ? 'learnMoreBtnSlideHidden' : 'learnMoreBtnSlide'
                }
                onClick={showSlidePicture}
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="aljTitleMobile">
            Chirurgien ophtalmologiste à la Fondation Ophtalmologique Adolphe de
            Rothschild dans le service du Dr. Gatinel.
          </h3>
          {introText ? (
            <div className={introText ? 'aboutTextDiv' : 'aboutTextHidden'}>
              <p className="aboutText">
                A la fin de mon internat dans des services spécialisés en
                ophtalmologie parisiens, je décide de me spécialiser en
                chirurgie du segment antérieure (cornée-glaucome-cataracte).
              </p>
              <p className="aboutText">
                C’est mon passage à l’institut du Glaucome de St-Joseph sur
                Paris, qui sera marquant pour moi. Auprès du Pr. Lachkar, je me
                forme en chirurgie filtrante et dans la gestion des glaucomes
                compliqués.
              </p>
              <p className="aboutText">
                Je termine mon internat dans le service du Dr. Gatinel à la
                Fondation Adolphe de Rothschild. Le service est spécialisé en
                greffe de cornée et chirurgie réfractive.
              </p>
              <p className="aboutText">
                Le Dr. Gatinel m’offre l’opportunité, par la suite de rejoindre
                son équipe en chirurgie réfractive et en développant le glaucome
                avec le Dr. Grise-Dulac.
              </p>
              <button
                type="button"
                className="learnMoreBtn"
                onClick={showIntroText}
              >
                Retour vers la liste
              </button>
            </div>
          ) : (
            <ul
              className={
                slidePicture ? 'aljAchievementList' : 'aljAchievementHidden'
              }
            >
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

              <button
                type="button"
                className="learnMoreBtn"
                onClick={showIntroText}
              >
                En savoir plus
              </button>
            </ul>
          )}
        </div>
      </section>
    </SIntroduction>
  );
}

export default Introduction;
