import NameItem from './NameItem';

function NameList(props) {
  return (
    <ul className="list">
      {props.names.map((name, idx) => (
        <NameItem key={idx} name={name} />
      ))}
    </ul>
  );
}

export default NameList;
