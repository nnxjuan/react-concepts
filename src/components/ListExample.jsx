function ListExample() {
  const fruits = [
    { id: 1, name: "Manzana" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Naranja" },
    { id: 4, name: "Pera" },
  ];

  return (
    <div className="example-component">
      <h2>2. List Rendering</h2>

      {/* Ejemplo de renderizado de listas usando map */}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>

      {/* Ejemplo de renderizado de listas con más contenido */}
      <div className="fruit-cards">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="fruit-card">
            <h3>{fruit.name}</h3>
            <p>Fruta ID: {fruit.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListExample;
