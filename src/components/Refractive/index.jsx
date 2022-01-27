import axios from 'axios';
import { useEffect, useState } from 'react';
import DropdownWindow from 'components/DropdownWindows';
import { useLocation } from 'react-router-dom';

export default function Refractive() {
  const [refractives, setRefractives] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5050/contents`).then(({ data }) => {
      setRefractives(data);
    });
  }, []);
  const dicoPages = {
    '/': 1,
    '/glaucoma': 2,
    '/cataract': 3,
    '/refractive': 4,
  };

  const pagesUrl = useLocation().pathname;
  return (
    <>
      {refractives
        .filter((data) => {
          return parseInt(data.idPages, 10) === dicoPages[pagesUrl];
        })
        .map((refractive) => {
          return (
            <DropdownWindow
              key={refractive.id}
              title={refractive.title}
              content={refractive.text}
              idContent={refractive.id}
            />
          );
        })}
    </>
  );
}
