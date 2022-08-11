import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export default function CarrinhoProvider({ children }) {
  const [lista, setLista] = useState([]);

  <CarrinhoContext.Provider value={{ lista, setLista }}>
    {children}
  </CarrinhoContext.Provider>;
}
