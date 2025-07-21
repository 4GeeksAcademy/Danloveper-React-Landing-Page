function Button(props) {
  return (
    <div className={`mt-3 d-flex ${props.buttonDirection}`}>
      <a href="#" className="btn btn-primary">
        {props.buttonLabel}
      </a>
    </div>
  );
}

export default Button;
