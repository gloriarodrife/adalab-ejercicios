const InputGroupRadio = (props) => {
  const handleInputChange = (ev) => {
    props.handleChange(ev.target.value);
  };

  return (
    <div className="input-group-radio">
      <label className="label-radio" htmlFor={props.name}>
        {props.labelText}
      </label>

      <input
        type="radio"
        name={props.name}
        id={props.id}
        value={props.value}
        checked={props.checked}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputGroupRadio;
