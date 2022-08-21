import { useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoProvider";
import { Link } from "react-router-dom"
import BotaoCarrinho from "../BotaoCarrinho"
import styles from "./ListaDeCompras.module.css"
function ListaDeCompras({ botaoNome, onClick, clickFinalizar, modalFooter, finalizarCompra, containerListaCards }) {

    const { lista, incrementaProdutos, decrementaOuRemove, qtde } = useContext(CarrinhoContext);
    return (
        <>
            <div className={containerListaCards}>

                {lista.map((produto, index) => {
                    return (
                        <div className={styles.containerCard} key={index}>
                            <img src={produto.url_imagem} alt={produto.descricao} />
                            <p className={styles.titulo}>{produto.titulo}</p>
                            <p className={styles.preco}> R$ {produto.preco}</p>
                            <p className={styles.descricao}>{produto.descricao}</p>
                            <div className={styles.counter}>
                                <BotaoCarrinho
                                    addOuRemove="+"
                                    click={() => incrementaProdutos(produto)}
                                ></BotaoCarrinho>
                                <p>{qtde.filter((item) => item === produto).length}</p>
                                <BotaoCarrinho
                                    addOuRemove="-"
                                    click={() => {
                                        decrementaOuRemove(produto);
                                        if (
                                            qtde.filter((item) => item === produto).length === 0
                                        ) {
                                            decrementaOuRemove(produto);
                                        }
                                    }}
                                ></BotaoCarrinho>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={modalFooter}>
                {!botaoNome || !onClick && <button style={{ display: 'none' }} className={styles.closeButton} onClick={onClick}>{botaoNome}</button> || <button className={styles.closeButton} onClick={onClick}>{botaoNome}</button>}
                <span>
                    Total: R$
                    {(qtde.length > 0 &&
                        qtde
                            .map((produto) => {
                                let qtdeDoProduto = qtde.filter(
                                    (item) => item === produto
                                ).length;
                                if ((qtdeDoProduto = 1)) {
                                    return produto.preco;
                                }
                                return qtdeDoProduto * produto.preco;
                            })
                            .reduce((atual, acum) => {
                                return atual + acum;
                            })) ||
                        "0,00"}
                </span>
                <div className={finalizarCompra}>
                    <Link to="/carrinho" onClick={clickFinalizar}>Finalizar Compra</Link>
                </div>
            </div>
        </>
    )
}

export default ListaDeCompras;