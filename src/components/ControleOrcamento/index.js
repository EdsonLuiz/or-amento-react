import React from "react";

export const ControleOrcamento = (props) => {
  const { orcamentoState, diferencaState } = props;
  return (
    <>
      <div className="alert alert-primary">Orçamento: ${orcamentoState}</div>
      <div className="alert">Restante: ${diferencaState}</div>
    </>
  );
};
