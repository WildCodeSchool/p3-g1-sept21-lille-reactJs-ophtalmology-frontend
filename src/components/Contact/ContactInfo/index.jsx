import SContactInfo from './SContactInfo';

function ContactInfos() {
  return (
    <SContactInfo>
      <section>
        <img
          src="https://img.icons8.com/ios-filled/100/000000/address--v1.png"
          alt="adresse"
        />
        <h2>Adresse</h2>
        <p>
          Hôpital Fondation A. de Rothschild - Département d&apos;ophtalmologie
        </p>
        <a
          href="https://www.google.com/maps/place/29+Rue+Manin,+75019+Paris/@48.8785959,2.3758722,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66ddce4640b37:0xe1d8cd749c325a1f!8m2!3d48.8785959!4d2.3780609"
          target="_blanck"
          rel="noopener noreferrer"
        >
          29 Rue Manin-75019 Paris
        </a>
      </section>

      <section>
        <img
          src="https://img.icons8.com/ios-filled/100/000000/email.png"
          alt="Email"
        />
        <h2>Adresse mail</h2>
        <p>A tout moment 7j/7, 24h/24.</p>
        <a href="mailto:arnaudlouisjeannerot@gmail.com">
          <strong>arnaudlouisjeannerot@gmail.com</strong>
        </a>
      </section>

      <section>
        <img
          src="https://img.icons8.com/ios-filled/100/000000/phone.png"
          alt="Téléphone"
        />
        <h2>Téléphone</h2>
        <p>Me contacter du lundi au vendredi de 8h &agrave; 19h</p>
        <a href="tel:0607080910">
          <strong> 0607080910 </strong>
        </a>
      </section>
    </SContactInfo>
  );
}

export default ContactInfos;
