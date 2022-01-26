import { PropTypes } from 'prop-types';
import cataractContent from './content';
import DropdownWindow from '../DropdownWindows/index';

function Cataract({ state }) {
  return (
    <>
      {cataractContent
        .filter((cataract) => cataract.id === state)
        .map((cataract) => (
          <DropdownWindow
            key={cataract.id}
            title={cataract.title}
            content={cataract.content}
            Dropdown={false}
          />
        ))}
      {cataractContent
        .filter((cataract) => cataract.id < state || cataract.id > state)
        .map((cataract) => (
          <DropdownWindow
            key={cataract.id}
            title={cataract.title}
            content={cataract.content}
            Dropdown
          />
        ))}
    </>
  );
}

Cataract.propTypes = {
  state: PropTypes.number.isRequired,
};
export default Cataract;
