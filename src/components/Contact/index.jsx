import SContact from './SContact';
import ContactInfos from './ContactInfo';
import ContactMap from './ContactMap';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <SContact>
      <ContactInfos />
      <ContactForm />
      <ContactMap />
    </SContact>
  );
}
