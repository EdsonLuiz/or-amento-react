import React from "react";

export const Error = ({ children }) => {
  return <p className="alert alert-danger error">{children}</p>;
};
