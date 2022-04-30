import PropTypes from 'prop-types';
const InputGroupCheck = (props) => {
  const handleInputChange = (ev) => {
    props.handleChange(ev.target.checked);
  };

  return (
    <div className="input-group-checkbox">
      <label className="label-check" htmlFor={props.name}>
        {props.labelText}
      </label>
      {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
      <input
        type="checkbox"
        name={props.name}
        id={props.id}
        checked={props.legalTerms}
        onChange={handleInputChange}
      />
    </div>
  );
};
InputGroupCheck.prototype = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default InputGroupCheck;
