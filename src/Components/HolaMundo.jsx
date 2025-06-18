import { useState } from "react";

const HolaMundo = (props) => {

  const [parentesis, setParentesis] = useState("");

  const mostrarParentesis = () => {
    setParentesis(parentesis + '(From changed state)')
  }

  return (
    <div>
      <h1>HEllO {props.mensajeProps} {parentesis} !</h1>
      <button type="button" onClick={mostrarParentesis}>Click Me!</button>
    </div>
  );
};

export default HolaMundo;