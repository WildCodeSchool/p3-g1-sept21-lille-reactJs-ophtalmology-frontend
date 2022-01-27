import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DropdownWindow from 'components/DropdownWindows';

export default function Cataract() {
  const [cataracts, setCataracts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5050/contents`).then(({ data }) => {
      setCataracts(data);
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
      {cataracts
        .filter((data) => {
          return parseInt(data.idPages, 10) === dicoPages[pagesUrl];
        })
        .map((cataract) => {
          return (
            <DropdownWindow
              key={cataract.id}
              title={cataract.title}
              content={cataract.text}
              idContent={cataract.id}
            />
          );
        })}
    </>
  );
}
