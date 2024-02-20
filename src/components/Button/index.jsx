import P from 'prop-types';
import './styles.css';

export const Button = ({ text, onClick, disabled }) => {
  return (
    <button onClick={onClick} className="button" disabled={disabled}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func,
  disabled: P.bool,
};
