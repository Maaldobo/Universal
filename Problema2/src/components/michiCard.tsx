import React, { useState, useEffect } from "react";
import { getImagen } from "../Services/Imagenes";
import { getText } from "../Services/Text";

export default function Card() {
  const [imagen, setImagen] = useState<string | null>(null);
  const [texto, setTexto] = useState<string>('');

  useEffect(() => {
    // Obtener imagen
    getImagen().then((data) => {
      setImagen(data.url); // Ahora obtenemos la URL correctamente
    });

    // Obtener texto
    getText().then((data) => {
      setTexto(data.fact);
    });
  }, []);

  return (
    <div className="card" style={{ width: '18rem' }}>
      {imagen ? (
        <img className="card-img-top" src={imagen} alt="Card image cap" />
      ) : (
        <p>Cargando imagen...</p>
      )}
      <div className="card-body">
        <p className="card-text">{texto || 'Cargando texto...'}</p>
      </div>
    </div>
  );
}
