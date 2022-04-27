const InputGroupSelect = (props) => {
  const handleInputChange = (ev) => {
    props.handleChange(ev.target.value);
  };

  return (
    <div className="input-group-select">
      <label className="label-text" htmlFor={props.name}>
        {props.labelText}
      </label>
      <select
        className="input-select"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={handleInputChange}
      >
        <option>España peninsular</option>
        <option>Islas Canarias</option>
        <option>Islas Baleares</option>
        <option>Ceuta</option>
        <option>Melilla</option>
      </select>
    </div>
  );
};

export default InputGroupSelect;
