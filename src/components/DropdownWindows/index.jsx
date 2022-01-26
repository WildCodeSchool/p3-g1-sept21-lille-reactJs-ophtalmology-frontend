import { useState } from 'react';
import { PropTypes } from 'prop-types';
import Pictures from 'components/Picture';
import SDropdownWindow from './style';

function DropdownWindow({ title, content, Dropdown }) {
  const [toggleDropdown, setToggleDropdown] = useState(Dropdown);
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
      <Pictures />
    </SDropdownWindow>
  );
}
DropdownWindow.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  Dropdown: PropTypes.bool.isRequired,
};
export default DropdownWindow;
