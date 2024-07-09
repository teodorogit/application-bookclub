import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homePage";
import Informacoes from "./pages/Informacao";
import Localizacao from "./pages/locate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/informacoes" element={<Informacoes />} />
                <Route path="/localizacao" element={<Localizacao />} />
            </Routes>
        </Router>
    );
}

export default App;
