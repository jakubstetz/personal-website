function Button({text, link, icon, external}) {
  return link ? (
    <a href={link} className="button shadow">
      {text}
    </a>
  ) : (
    <button className="button shadow">
      {text}
    </button>
  );
}

export default Button;