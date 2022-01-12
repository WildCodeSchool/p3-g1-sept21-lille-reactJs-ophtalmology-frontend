import { useState } from 'react';
import SEye from './style';
import ALJschemas from './ALJschemas3.png';

export default function EyeMap() {
  const [details, setDetails] = useState(null);
  const texts = {
    cornee: 'Cornée',
    humeur: 'Humeur acqueuse ',
    pupille: 'Pupille',
    iris: 'Iris',
    cristallin: 'Cristallin',
    vitré: 'Vitré',
    nerf: 'Nerf optique',
    retine: 'Rétine',
    corps: 'Corps ciliaire',
    conjonctive: 'Conjonctive',
  };

  const handleClick = (e) => {
    e.preventDefault();
    setDetails(texts[e.target.alt]);
  };
  return (
    <SEye>
      <div className="eyeContainer">
        <img src={ALJschemas} useMap="#eye-map" alt="Imgeye" />
      </div>
      <map name="eye-map">
        <area
          shape="circle"
          coords="14,155,19"
          href="cornee"
          target="_blank"
          alt="cornee"
          title="Cornée"
          onClick={handleClick}
        />
        <area
          shape="circle"
          coords="35,100,15"
          href="Lorem2"
          target="_blank"
          alt="humeur"
          title="Humeur acqueuse"
          onClick={handleClick}
        />
        <area
          shape="circle"
          coords="46,150,13"
          href="pupille"
          target="_blank"
          alt="pupille"
          title="Pupille"
          onClick={handleClick}
        />
        <area
          shape="circle"
          coords="62,220,22"
          href="iris"
          target="_blank"
          alt="iris"
          title="Iris"
          onClick={handleClick}
        />
        <area
          shape="circle"
          coords="91,155,21"
          href="cristallin"
          target="_blank"
          alt="cristallin"
          title="Cristallin"
          onClick={handleClick}
        />
        <area
          shape="circle"
          coords="190,82,20"
          href="vitré"
          target="_blank"
          alt="vitré"
          title="Vitré"
          onClick={handleClick}
        />
        <area
          shape="circle"
          coords="245,150,20"
          href="nerf"
          target="_blank"
          alt="nerf"
          title="Nerf optique"
          onClick={handleClick}
        />
        <area
          shape="circle"
          coords="230,200,13"
          href="retine"
          target="_blank"
          alt="retine"
          title="Rétine"
          onClick={handleClick}
        />
        <area
          shape="circle"
          coords="74,91,20"
          href="corps"
          target="_blank"
          alt="corps"
          title="Corps ciliaire"
          onClick={handleClick}
        />
        <area
          shape="circle"
          coords="94,250,16"
          href="conjonctive"
          target="_blank"
          alt="conjonctive"
          title="Conjonctive"
          onClick={handleClick}
        />
      </map>
      {details && <p>{details}</p>}
    </SEye>
  );
}
