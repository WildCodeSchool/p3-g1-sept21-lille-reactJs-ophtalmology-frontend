import { PropTypes } from 'prop-types';
import glaucomaContent from './content';
import DropdownWindow from '../DropdownWindows';

export default function Glaucoma({ state }) {
  return (
    <>
      {glaucomaContent
        .filter((glaucoma) => glaucoma.id === state)
        .map((glaucoma) => (
          <DropdownWindow
            key={glaucoma.id}
            title={glaucoma.title}
            content={glaucoma.content}
            Dropdown={false}
          />
        ))}
      {glaucomaContent
        .filter((glaucoma) => glaucoma.id < state || glaucoma.id > state)
        .map((glaucoma) => (
          <DropdownWindow
            key={glaucoma.id}
            title={glaucoma.title}
            content={glaucoma.content}
            Dropdown
          />
        ))}
    </>
  );
}

Glaucoma.propTypes = {
  state: PropTypes.number.isRequired,
};
