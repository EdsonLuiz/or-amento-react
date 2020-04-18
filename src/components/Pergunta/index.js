import React from "react";

export const Pergunta = () => {
  return (
    <>
      <h2>Qual o seu orçamento?</h2>
      <form action="">
        <input
          className="u-full-width"
          placeholder="exemplo 60.00"
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
