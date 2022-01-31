import { PropTypes } from 'prop-types';
import SPicture from './style';

export default function Pictures({ imgUrl, imgDesc }) {
  return (
    <SPicture>
      <img
        src={`${process.env.REACT_APP_API_URL}/${imgUrl}` || null}
        alt={imgDesc || null}
      />
      <p>{imgDesc || null}</p>
    </SPicture>
  );
}

Pictures.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgDesc: PropTypes.string.isRequired,
};
