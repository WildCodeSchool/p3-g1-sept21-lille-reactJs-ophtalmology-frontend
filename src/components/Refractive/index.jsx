import { PropTypes } from 'prop-types';
import DropdownWindow from 'components/DropdownWindows';
import refractiveContent from './content';

export default function Refractive({ state }) {
  return (
    <>
      {refractiveContent
        .filter((refractive) => refractive.id === state)
        .map((refractive) => (
          <DropdownWindow
            key={refractive.id}
            title={refractive.title}
            content={refractive.content}
            Dropdown={false}
          />
        ))}
      {refractiveContent
        .filter((refractive) => refractive.id < state || refractive.id > state)
        .map((refractive) => (
          <DropdownWindow
            key={refractive.id}
            title={refractive.title}
            content={refractive.content}
            Dropdown
          />
        ))}
    </>
  );
}

Refractive.propTypes = {
  state: PropTypes.number.isRequired,
};
