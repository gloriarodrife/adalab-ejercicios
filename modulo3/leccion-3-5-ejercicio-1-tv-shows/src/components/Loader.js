const Loader = (props) => {
  return <div className={props.isEditMode ? 'loader' : ''}></div>;
};

export default Loader;
