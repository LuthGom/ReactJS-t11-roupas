export default function BotaoCarrinho({ addOuRemove,counter, click }) {
  return (
    <>
      <button onClick={click}>{addOuRemove} {counter}</button>
    </>
  );
}
