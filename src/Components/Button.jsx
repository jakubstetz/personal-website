function Button({ text, clickHandler, href }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="button shadow"
      >
        {text}
      </a>
    );
  }

  return (
    <button onClick={clickHandler} className="button shadow">
      {text}
    </button>
  );
}

export default Button;
