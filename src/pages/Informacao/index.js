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
                    A Biblioteca da <br />
                    meia-noite
                </h3>
                <p id="descricao">
                    <span>Resumo do livro:</span>
                    um romance incrível que fala dos infinitos rumos que a vida pode tomar e da busca incessante pelo
                    rumo certo. Aos 35 anos, Nora Seed é uma mulher cheia de talentos e poucas conquistas. Após ser
                    demitida e seu gato ser atropelado, Nora vê pouco sentido em sua existência e decide colocar um
                    ponto final em tudo. Porém, quando se vê na Biblioteca da Meia-Noite, Nora ganha uma oportunidade
                    única de viver todas as vidas que poderia ter vivido. Neste lugar entre a vida e a morte, e graças à
                    ajuda de uma velha amiga, Nora pode, finalmente, se mudar para a Austrália, reatar relacionamentos
                    antigos – ou começar outros –, ser uma estrela do rock, uma glaciologista, uma nadadora olímpica...
                    enfim, as opções são infinitas.
                </p>
            </div>
        </div>
    );
};

export default Index;
