import ContactInfos from './ContactInfo';
import ContactMap from './ContactMap';
import ContactForm from './ContactForm';
import SContact from './SContact';

export default function Contact() {
  return (
    <SContact>
      <ContactInfos />
      <ContactForm />
      <ContactMap />
    </SContact>
  );
}
