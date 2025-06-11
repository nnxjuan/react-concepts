// Componente hijo que recibe props
function Greeting({ name, age }) {
  // Intentar modificar una prop generará un error
  //name = "Otro nombre"; // Esto causaría un error

  return (
    <div>
      <p>
        Hola {name}, tienes {age} años
      </p>
    </div>
  );
}

// Componente padre que demuestra el uso de props
function PropsExample() {
  return (
    <div className="example-component">
      <h2>3. Props (Read-only)</h2>

      {/* Pasando props al componente hijo */}
      <Greeting name="Juan" age={25} />
      <Greeting name="María" age={30} />

      <div className="props-explanation">
        <p>Las props son de solo lectura:</p>
        <ul>
          <li>Se pasan de padre a hijo</li>
          <li>No se pueden modificar en el componente hijo</li>
          <li>Ayudan a hacer componentes reutilizables</li>
        </ul>
      </div>
    </div>
  );
}

export default PropsExample;

// function PropsExample() {
//   const [userName, setUserName] = useState("Juan");

//   return (
//     <Greeting
//       name={userName}
//       age={25}
//       onNameChange={setUserName} // Pasamos una función para cambiar el nombre
//     />
//   );
// }
