import { useState } from 'react';
import { PropTypes } from 'prop-types';
import SDropdownWindow from './style';

function DropdownWindow({ title, content }) {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const showToggleDropdown = () => setToggleDropdown(!toggleDropdown);

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
      <p className={toggleDropdown ? 'hiddenDropdown' : 'dropdownContent'}>
        {content}
      </p>
    </SDropdownWindow>
  );
}
DropdownWindow.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default DropdownWindow;
