import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import Pictures from '../Picture';
import SDropdownWindow from './style';

function DropdownWindow({ title, content, idContent }) {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const showToggleDropdown = () => setToggleDropdown(!toggleDropdown);
  const newTexts = content.split('/break/');
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/images`)
      .then(({ data }) => {
        setPictures(data);
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
  return (
    <SDropdownWindow>
      <div className="windowTitle">
        <button
          type="button"
          className="dropdownBtn"
          onClick={showToggleDropdown}
        >
          {title}
        </button>
      </div>
      <div className="imageContent">
        <div className={toggleDropdown ? 'hiddenDropdown' : 'dropdownContent'}>
          {newTexts.map((newText) => {
            return newText === '' ? <br /> : <p>{newText}</p>;
          })}
          <div className="pictureDisplay">
            {pictures
              .filter((picture) => {
                return picture.idContents === idContent;
              })
              .map((picture) => {
                return (
                  <Pictures
                    idContent={idContent}
                    imgUrl={picture.url}
                    imgDesc={picture.description}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </SDropdownWindow>
  );
}
DropdownWindow.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  idContent: PropTypes.number.isRequired,
};
export default DropdownWindow;
