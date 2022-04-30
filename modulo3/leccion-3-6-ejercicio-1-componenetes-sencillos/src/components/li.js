const Li = (props) => {
  console.log(props.openInNewTab);
  return (
    <li>
      <a
        target={props.openInNewTab}
        rel="noopener noreferrer"
        href={props.href}
        className="item_menu"
      >
        {props.text}
      </a>
    </li>
  );
};

Li.defaultProps = {
  openInNewTab: 'false',
};

export { Li };
