const InputGroupRadio = ({
  name,
  labelText,
  id,
  value,
  checked,
  handleChange,
}) => {
  const handleInputChange = (ev) => {
    handleChange(ev.target.value);
  };

  return (
    <div className="input-group-radio">
      <label className="label-radio" htmlFor={name}>
        {labelText}
      </label>

      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputGroupRadio;
