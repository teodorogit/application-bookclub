import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homePage";
import Informacoes from "./pages/Informacao";
import Localizacao from "./pages/locate";
import Comentarios from "./pages/comentarios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/informacoes" element={<Informacoes />} />
                <Route path="/localizacao" element={<Localizacao />} />
                <Route path="/comentarios" element={<Comentarios />} />
            </Routes>
        </Router>
    );
}

export default App;
