import React, { useState } from "react";
import { Error } from "../Error";

export const Pergunta = ({
  setOrcamentoState,
  setDiferencaState,
  setShowFormOrcamento,
}) => {
  const [inputOrcamentoState, setInputOrcamentoState] = useState(0);
  const [hasError, setHasError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (inputOrcamentoState < 1 || isNaN(inputOrcamentoState)) {
      setHasError(true);
      return;
    }

    setHasError(false);
    setOrcamentoState(inputOrcamentoState);
    setDiferencaState(inputOrcamentoState);
    setShowFormOrcamento(false);
    setInputOrcamentoState(parseInt(0));
  }

  return (
    <>
      <h2>Qual o seu orçamento?</h2>
      {hasError && <Error>Existe um erro</Error>}
      <form onSubmit={handleSubmit}>
        <input
          className="u-full-width"
          placeholder="exemplo 60.00"
          value={inputOrcamentoState}
          onChange={(e) => setInputOrcamentoState(parseInt(e.target.value))}
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
