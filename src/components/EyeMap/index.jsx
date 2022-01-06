import { useState } from 'react';
import SEye from './style';
import ALJschemas from './ALJschemas3.png';

export default function EyeMap() {
  const [details, setDetails] = useState(null);
  const texts = {
    cornee:
      'Lorem ipsum dolor sit amet. Et optio sunt sit dolore dolorum nam deserunt consequatur. Et quasi autem eos odit facilis et velit et reprehenderit est repudiandae asperiores et enim similique ut consequuntur dolores',
    humeur:
      'Sed magni autem qui Quis voluptatibus rem expedita doloribus. Est quasi explicabo non delectus adipisci aut libero voluptatem eum dolorum assumenda a quia rerum. ',
  };

  const handleClick = (e) => {
    e.preventDefault();
    setDetails(texts[e.target.alt]);
  };
  return (
    <SEye>
      <img src={ALJschemas} useMap="#oeil-map" alt="Imgoeil" />
      <map name="oeil-map">
        <area
          shape="circle"
          coords="14,168,19"
          href="cornee"
          target="_blank"
          alt="cornee"
          title="Cornée"
          onClick={handleClick}
        />
        <area
          shape="circle"
          coords="35,133,15"
          href="Lorem2"
          target="_blank"
          alt="humeur"
          title="Humeur acqueuse"
          onClick={handleClick}
        />
        <area
          shape="circle"
          coords="46,170,13"
          href="https://developer.mozilla.org/docs/Web/Guide/Graphics"
          target="_blank"
          alt="Pupille"
          title="Pupille"
        />
        <area
          shape="circle"
          coords="62,223,17"
          href="https://developer.mozilla.org/docs/Web/HTML"
          target="_blank"
          alt="Iris"
          title="Iris"
        />
        <area
          shape="circle"
          coords="91,165,21"
          href="https://developer.mozilla.org/docs/Web/JavaScript"
          target="_blank"
          alt="Cristallin"
          title="Cristallin"
        />
        <area
          shape="circle"
          coords="227,82,20"
          href="https://developer.mozilla.org/docs/Web/API"
          target="_blank"
          alt="Vitré"
          title="Vitré"
        />
        <area
          shape="circle"
          coords="302,166,20"
          href="https://developer.mozilla.org/docs/Web/CSS"
          target="_blank"
          alt="nerf optique"
          title="Nerf optique"
        />
        <area
          shape="circle"
          coords="262,237,13"
          href="https://developer.mozilla.org/docs/Web/CSS"
          target="_blank"
          alt="Rétine"
          title="Retine"
        />
        <area
          shape="circle"
          coords="74,91,20"
          href="https://developer.mozilla.org/docs/Web/CSS"
          target="_blank"
          alt="Corps ciliaire"
          title="Corps ciliaire"
        />
        <area
          shape="circle"
          coords="94,294,16"
          href="https://developer.mozilla.org/docs/Web/CSS"
          target="_blank"
          alt="Conjonctive"
          title="Conjonctive"
        />
      </map>
      {details && <p>{details}</p>}
    </SEye>
  );
}
