import React from "react";
import {revisarOrcamento} from '../../helpers'

export const ControleOrcamento = (props) => {
  const { orcamentoState, diferencaState } = props;
  return (
    <>
      <div className="alert alert-primary">Orçamento: ${orcamentoState}</div>
      <div className={revisarOrcamento(orcamentoState, diferencaState )}>Restante: ${diferencaState}</div>
    </>
  );
};
