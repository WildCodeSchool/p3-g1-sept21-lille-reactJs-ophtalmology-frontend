import { useState } from 'react';
import { PropTypes } from 'prop-types';
import Pictures from 'components/Picture';
import SDropdownWindow from './style';

function DropdownWindow({ title, content, idContent }) {
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
      <div className="imageContent">
        <p className={toggleDropdown ? 'hiddenDropdown' : 'dropdownContent'}>
          {content}
          <Pictures idContent={idContent} />
        </p>
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
