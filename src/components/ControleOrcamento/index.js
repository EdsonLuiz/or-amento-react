import React from "react";
import {revisarOrcamento} from '../../helpers'
import PropTypes from 'prop-types'

export const ControleOrcamento = (props) => {
  const { orcamentoState, diferencaState } = props;
  return (
    <>
      <div className="alert alert-primary">Orçamento: ${orcamentoState}</div>
      <div className={revisarOrcamento(orcamentoState, diferencaState )}>Restante: ${diferencaState}</div>
    </>
  );
};

ControleOrcamento.propTypes = {
  orcamentoState: PropTypes.number.isRequired ,
  diferencaState: PropTypes.number.isRequired
}
