import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export default function CarrinhoProvider({ children }) {
  const [lista, setLista] = useState([]);
  const [qtde, setQtde] = useState([]);
  function addItemAoCarrinho(item) {
    const novoItem = lista.includes(item);
    if (!novoItem) {
      setLista([...lista, item]);
      setQtde([...qtde, item])
      console.log(lista);
    } else {
      setLista(lista);
    }
  }
  function incrementaProdutos(produto) {
    setQtde([...qtde, produto]);
  }
  function decrementaOuRemove(produto) {
    setLista(qtde.splice(qtde.indexOf(produto), 1));
  }
  return (
    <CarrinhoContext.Provider
      value={{
        lista,
        setLista,
        addItemAoCarrinho,
        incrementaProdutos,
        decrementaOuRemove,
        qtde,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
