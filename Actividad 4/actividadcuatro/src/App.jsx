import React from 'react';
import Saludo from './Saludo';
import Presentacion from './Presentacion';

function App() {
  return (
    <div>
      <Saludo nombre="Martín" />
      <Presentacion nombre="Lucía" edad={28} profesion="Diseñadora" />
    </div>
  );
}

export default App;
