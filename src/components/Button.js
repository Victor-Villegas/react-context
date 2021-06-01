function Button (props) {
  return (
    <button
      type="button"
      className={`${props.theme}-button ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
