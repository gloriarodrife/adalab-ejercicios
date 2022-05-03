import Item from './Item';

const ItemsList = (props) => {
  const renderList = props.data.map((user) => {
    return <Item user={user} />;
  });
  return <ul>{renderList}</ul>;
};

export default ItemsList;
