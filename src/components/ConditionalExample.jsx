import { useState } from 'react';

function ConditionalExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="example-component">
      <h2>1. Conditional Rendering</h2>
      
      {/* Ejemplo de renderizado condicional usando operador ternario */}
      {isLoggedIn ? (
        <p>¡Bienvenido Usuario!</p>
      ) : (
        <p>Por favor inicia sesión</p>
      )}

      {/* Ejemplo de renderizado condicional usando && */}
      {isLoggedIn && <p>Este texto solo se ve cuando estás logueado</p>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}
      </button>
    </div>
  );
}

export default ConditionalExample;
