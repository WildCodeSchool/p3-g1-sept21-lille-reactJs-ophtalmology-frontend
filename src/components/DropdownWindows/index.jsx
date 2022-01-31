import { useState } from 'react';
import { PropTypes } from 'prop-types';
import SDropdownWindow from './style';

function DropdownWindow({ title, content }) {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const showToggleDropdown = () => setToggleDropdown(!toggleDropdown);
  const newTexts = content.split('/break/');

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
        {newTexts.map((newText) => {
          return <p> {newText}</p>;
        })}
      </div>
    </SDropdownWindow>
  );
}
DropdownWindow.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default DropdownWindow;
