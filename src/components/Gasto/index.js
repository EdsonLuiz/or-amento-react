import React from "react";
import PropTypes from 'prop-types'

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

Gasto.propTypes = {
  despesa: PropTypes.object.isRequired
}
