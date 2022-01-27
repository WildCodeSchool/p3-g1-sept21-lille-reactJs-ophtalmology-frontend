import axios from 'axios';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import SPicture from './style';

export default function Pictures({ idContent }) {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5050/images`).then(({ data }) => {
      setPictures(data);
    });
  }, []);
  return (
    <SPicture>
      {pictures
        .filter((picture) => {
          return picture.idContents === idContent;
        })
        .map((picture) => {
          return (
            <img src={picture.url || null} alt={picture.description || null} />
          );
        })}
    </SPicture>
  );
}

Pictures.propTypes = {
  idContent: PropTypes.string.isRequired,
};
