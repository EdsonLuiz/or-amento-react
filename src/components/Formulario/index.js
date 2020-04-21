import React, { useState } from "react";
import { Error } from "../Error";

export const Formulario = () => {
  const [nomeState, setNomeState] = useState("");
  const [quantidadeState, setQuantidadeState] = useState(0);
  const [errorState, setErrorState] = useState(false);

  const adicionarDespesa = (e) => {
    e.preventDefault();

    if (
      quantidadeState < 1 ||
      isNaN(quantidadeState) ||
      nomeState.trim() === ""
    ) {
      setErrorState(true);
      return;
    }

    setNomeState("");
    setQuantidadeState(0);
    setErrorState(false);
  };

  return (
    <div>
      <form onSubmit={adicionarDespesa}>
        <h2>Adicione suas despesas</h2>
        {errorState && <Error>Erro no formulário</Error>}
        <div className="campo">
          <label htmlFor="despesa">Nome da despesa</label>
          <input
            id="despesa"
            className="u-full-width"
            placeholder="exemplo Aluguel"
            value={nomeState}
            onChange={(e) => setNomeState(e.target.value)}
            type="text"
          />

          <label htmlFor="quantidade">Quantidade</label>
          <input
            id="quantidade"
            className="u-full-width"
            placeholder="exemplo 1"
            value={quantidadeState}
            onChange={(e) => setQuantidadeState(parseInt(e.target.value))}
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
