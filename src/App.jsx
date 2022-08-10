import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pagina404 from "./pages/Pagina404";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Masculino from "./pages/Categorias/Masculino";
import Feminino from "./pages//Categorias/Feminino";
import LGBT from "./pages//Categorias/LGBTQIA";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masculino" element={<Masculino />} />
          <Route path="/feminino" element={<Feminino />} />
          <Route path="/lgbt" element={<LGBT />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
