import React, { useState } from "react";
import { Error } from "../Error";

export const Pergunta = () => {
  const [orcamentoState, setOrcamentoState] = useState(0);
  const [hasError, setHasError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (orcamentoState < 1 || isNaN(orcamentoState)) {
      setHasError(true);
      return;
    }

    setHasError(false);
    setOrcamentoState(parseInt(0));
  }

  return (
    <>
      <h2>Qual o seu orçamento?</h2>
      {hasError && <Error>Existe um erro</Error>}
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
