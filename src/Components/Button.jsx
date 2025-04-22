function Button({ text, clickHandler }) {
  return (
    <button onClick={clickHandler} className="button shadow">
      {text}
    </button>
  );
}

export default Button;
