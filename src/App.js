import React from 'react';

import "./styles.css";

//Importa os componentes necessários
import Header from "./components/Header";
import Routes from "./routes";

/*
 * Cria componente sem estado com JSX que será renderizado no index.js
 * 
 * - Componente: conjunto de lógica, estrutura e estilização
 */
const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;