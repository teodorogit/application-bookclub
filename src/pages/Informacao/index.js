import React, { useState } from "react";
import "./style.css";
import { SiGooglemaps } from "react-icons/si";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";

const Index = () => {
    return (
        <div>
            <Header title="Informações" />
            <h3 id="conteudo">Livro do mês:</h3>
            <div id="livro">
                <h3 id="titulo">
                    Em Agosto nos vemos
                    <br />
                </h3>
                <p id="descricao">
                    <span>Resumo do livro:</span>
                    Em agosto nos vemos gira em torno de uma mulher de quarenta e seis anos, conhecida inicialmente
                    apenas como AMB, que anualmente pega uma barca para uma pequena ilha para visitar o túmulo de sua
                    mãe. Este ritual é tanto um ato de amor quanto uma busca por compreensão e paz interior.
                </p>
            </div>
        </div>
    );
};

export default Index;
