import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export default function CarrinhoProvider({ children }) {
  const [lista, setLista] = useState([]);
  const [total, setTotal] = useState([]);
  function addItemAoCarrinho(item) {
    var incl = lista.includes(item);
    if (!incl) {
      setLista([...lista, item]);
      console.log(lista);
    } else {
      setLista(lista);
    }
  }
  return (
    <CarrinhoContext.Provider
      value={{ lista, setLista, total, setTotal, addItemAoCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
