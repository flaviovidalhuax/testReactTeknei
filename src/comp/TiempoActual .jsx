import React, { useState, useEffect } from 'react';

const TiempoActual = () => {
  const [tiempo, setTiempo] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h4>Tiempo Actual</h4>
      <p>{tiempo.toLocaleTimeString()}</p>
    </div>
  );
};

export default TiempoActual;
