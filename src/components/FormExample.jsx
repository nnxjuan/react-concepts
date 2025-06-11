import { useState } from 'react';

function FormExample() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado con los datos:\n' + 
          `Username: ${formData.username}\n` +
          `Email: ${formData.email}\n` +
          `Message: ${formData.message}`);
  };

  return (
    <div className="example-component">
      <h2>5. Formularios</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Ingresa tu usuario"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
          />
        </div>

        <button type="submit">Enviar</button>
      </form>

      <div className="form-preview">
        <h3>Vista previa:</h3>
        <p>Usuario: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <p>Mensaje: {formData.message}</p>
      </div>
    </div>
  );
}

export default FormExample;
