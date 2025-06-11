import { useState } from "react";

function StateAndEventsExample() {
  const [count, setCount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Event handler para el click
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Event handler para el movimiento del mouse
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="example-component">
      <h2>4. State y Event Listeners</h2>

      <div className="state-example">
        <h3>Ejemplo de Estado:</h3>
        <p>Contador: {count}</p>
        <button onClick={handleClick}>Incrementar</button>
      </div>

      <div className="event-example" onMouseMove={handleMouseMove}>
        <h3>Ejemplo de Event Listener:</h3>
        <p>Mueve el mouse sobre este div</p>
        <p>
          Posición del mouse: X: {mousePosition.x}, Y: {mousePosition.y}
        </p>
      </div>
    </div>
  );
}

export default StateAndEventsExample;
