import React, { useState } from "react";
import { Pergunta } from "./components/Pergunta";

function App() {
  const [orcamentoState, setOrcamentoState] = useState(0);
  const [diferencaState, setDiferencaState] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Pergunta
            setOrcamentoState={setOrcamentoState}
            setDiferencaState={setDiferencaState}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
