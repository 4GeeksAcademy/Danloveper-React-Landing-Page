import Button from "./Button";

function Card(props) {
  return (
    <div className="card mt-4" style={{ width: "100%" }}>
      <img src={props.imageUrl} className="card-img-top" style={{objectFit: "cover", height:"325px"}} alt={props.imageLabel} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.description}
        </p>
        <Button buttonLabel={props.buttonLabel} />
      </div>
    </div>
  );
}

export default Card