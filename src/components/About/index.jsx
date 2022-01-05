import SAbout from './style';
import ALJ2 from '../../assets/ALJ2.jpg';

function About() {
  return (
    <SAbout>
      <section className="about">
        <div className="aboutPicDiv">
          <img className="aboutPic" src={ALJ2} alt="Dr. Jeannerot" />
        </div>
        <div className="aboutTextDiv">
          <p className="aboutText">
            A la fin de mon internat dans des services spécialisés en
            ophtalmologie parisiens, je décide de me spécialiser en chirurgie du
            segment antérieure (cornée-glaucome-cataracte).
          </p>
          <p className="aboutText">
            C’est mon passage à l’institut du Glaucome de St-Joseph sur Paris,
            qui sera marquant pour moi. Auprès du Pr. Lachkar, je me forme en
            chirurgie filtrante et dans la gestion des glaucomes compliqués.
          </p>
          <p className="aboutText">
            Je termine mon internat dans le service du Dr. Gatinel à la
            Fondation Adolphe de Rothschild. Le service est spécialisé en greffe
            de cornée et chirurgie réfractive.
          </p>
          <p className="aboutText">
            Le Dr. Gatinel m’offre l’opportunité, par la suite de rejoindre son
            équipe en chirurgie refrcative et en développant le glaucome avec le
            Dr. Grise-Dulac.
          </p>
        </div>
      </section>
    </SAbout>
  );
}

export default About;
