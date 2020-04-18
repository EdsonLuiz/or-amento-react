import React, { useState } from "react";

export const Pergunta = () => {
  const [orcamentoState, setOrcamentoState] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado");

    setOrcamentoState(parseInt(0));
  };

  return (
    <>
      <h2>Qual o seu orçamento?</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="u-full-width"
          placeholder="exemplo 60.00"
          value={orcamentoState}
          onChange={(e) => setOrcamentoState(parseInt(e.target.value))}
          type="number"
        />
        <input
          value="definir orçamento"
          className="u-full-width button-primary"
          type="submit"
        />
      </form>
    </>
  );
};
