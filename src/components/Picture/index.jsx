import axios from 'axios';
import { useEffect, useState } from 'react';
import SPicture from './style';

export default function Pictures() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5050/images`).then(({ data }) => {
      setPictures(data);
    });
  }, []);
  return (
    <SPicture>
      {pictures.map((picture) => {
        return <img src={picture.url} alt="opthalmology" />;
      })}
    </SPicture>
  );
}
