import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Pictures from 'components/Picture';
import axios from 'axios';
import SDropdownWindow from './style';

function DropdownWindow({ title, content, idContent }) {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const showToggleDropdown = () => setToggleDropdown(!toggleDropdown);
  const newTexts = content.split('/break/');
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/images`).then(({ data }) => {
      setPictures(data);
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
  idContent: PropTypes.string.isRequired,
};
export default DropdownWindow;
