function Button({ text, link }) {
  return link ? (
    <a href={link} className="button shadow">
      {text}
    </a>
  ) : (
    <button className="button shadow">{text}</button>
  );
}

export default Button;
