import Item from './Item';

const ItemsList = (props) => {
  const renderList = props.data.map((user, index) => {
    return <Item key={index} user={user} />;
  });
  return <ul>{renderList}</ul>;
};

export default ItemsList;
