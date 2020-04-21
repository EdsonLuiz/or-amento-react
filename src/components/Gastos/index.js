import React from "react";
import { Gasto } from "../Gasto";

export const Gastos = (props) => {
  const { despesasState } = props;
  return (
    <div className="gastos-realizados">
      <h2>Lista de gastos</h2>
      {despesasState.map((despesa) => (
        <Gasto key={despesa.id} despesa={despesa} />
      ))}
    </div>
  );
};
