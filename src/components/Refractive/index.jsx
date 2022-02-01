import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import DropdownWindow from 'components/DropdownWindows';
import { useLocation } from 'react-router-dom';

export default function Refractive() {
  const [refractives, setRefractives] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/contents`)
      .then(({ data }) => {
        setRefractives(data);
      })
      .catch(() => {
        toast.error('Une erreur est survenue !', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
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
