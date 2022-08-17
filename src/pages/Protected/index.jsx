import { useAuth } from "../../context/AuthProvider/useAuth";
import { Link } from "react-router-dom";
export default function Protected({ children }) {
  const auth = useAuth();
  
  if (!auth.email) {
    return (
      <>
        <h1>Você precisa logar antes de finalizar a compra!</h1>
        <Link to="/login">Logar</Link>
      </>
    );
  }
  return children;
}
