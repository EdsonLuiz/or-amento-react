import React from "react";
import { Pergunta } from "./components/Pergunta";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Pergunta />
        </div>
      </header>
    </div>
  );
}

export default App;
