import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import DropdownWindow from 'components/DropdownWindows';
import { useLocation } from 'react-router-dom';
import CommentsArea from '../CommentsArea';

export default function Glaucoma() {
  const [glaucomas, setGlaucomas] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/contents`)
      .then(({ data }) => {
        setGlaucomas(data);
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
      {glaucomas
        .filter((data) => {
          return parseInt(data.idPages, 10) === dicoPages[pagesUrl];
        })
        .map((glaucoma) => {
          return (
            <DropdownWindow
              key={glaucoma.id}
              title={glaucoma.title}
              content={glaucoma.text}
              idContent={glaucoma.id}
            />
          );
        })}
      <CommentsArea />
    </>
  );
}
