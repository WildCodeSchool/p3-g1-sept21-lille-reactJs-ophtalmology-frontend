import SContactDiv from './style';

function ContactInfos() {
  return (
    <SContactDiv>
      <section>
        <img
          src="https://img.icons8.com/ios-filled/100/ffffff/phone.png"
          alt="Téléphone"
        />
        <h2>Téléphone</h2>
        <p>Du lundi au vendredi de 8h &agrave; 19h</p>
        <h2> Service Ophtalmologique : </h2>
        <a href="tel:0148036482">01 48 03 64 82</a>
        <h2> Service Chirurgie : </h2>
        <a href="tel: 0148036710">01 48 03 67 10</a>
      </section>
      <section>
        <img
          src="https://img.icons8.com/ios-filled/100/ffffff/email.png"
          alt="Email"
        />
        <h2>Me contacter</h2>
        <p>A tout moment 7j/7, 24h/24.</p>
      </section>

      <section>
        <img
          src="https://img.icons8.com/ios-filled/100/ffffff/address--v1.png"
          alt="adresse"
        />
        <h2>Adresse</h2>
        <p>
          Chirurgie réfractive à l&apos;Institut Laser Vision 44 avenue Mathurin
          Moreau 75019 PARIS
        </p>
        <br />
        <p>
          Fondation Ophtalmologique A. de Rothschild 25-29 rue Manin 75019 Paris
          Service du Dr Gatinel
        </p>
      </section>
    </SContactDiv>
  );
}

export default ContactInfos;
