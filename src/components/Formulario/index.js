import React, { useState } from "react";

export const Formulario = () => {
  return (
    <div>
      <form onSubmit={() => {}}>
        <h2>Adicione suas despesas</h2>
        <div className="campo">
          <label htmlFor="despesa">Nome da despesa</label>
          <input
            id="despesa"
            className="u-full-width"
            placeholder="exemplo Aluguel"
            type="text"
          />

          <label htmlFor="quantidade">Quantidade</label>
          <input
            id="quantidade"
            className="u-full-width"
            placeholder="exemplo 1"
            type="number"
          />

          <input
            className="u-full-width button-primary"
            value="Adicionar despesa"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};
