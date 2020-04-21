import React from "react";

export const Gasto = ({ despesa }) => {
  return (
    <li className="gastos">
      <p>
        {despesa.nome}
        <span className="gasto">${despesa.quantidade}</span>
      </p>
    </li>
  );
};
