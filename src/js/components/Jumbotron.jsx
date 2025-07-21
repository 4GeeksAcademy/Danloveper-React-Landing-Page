import Button from "./Button";

function Jumbotron(props) {
  return (
    <div>
      {" "}
      <div className="h-100 p-5 bg-body-tertiary border rounded-3">
        {" "}
        <h1>
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>{props.title}</font>
          </font>
        </h1>{" "}
        <p>
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>
              O bien, manténgalo ligero y añada un borde para definir mejor los
              límites de su contenido. Asegúrese de revisar el código HTML
              original, ya que hemos ajustado la alineación y el tamaño del
              contenido de ambas columnas para que tengan la misma altura.
            </font>
          </font>
        </p>
        <Button buttonLabel="Call to action" />
      </div>{" "}
    </div>
  );
}

export default Jumbotron;
