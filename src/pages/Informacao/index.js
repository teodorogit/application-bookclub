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
            <div id="livro">
                <h3 id="titulo">Livro do mês:</h3>
                <p id="descricao">
                    <span>Resumo do livro:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure earum
                    officia eligendi dolorem molestias minus quis, quasi tempore debitis quidem nihil repellendus esse
                    nulla minima explicabo. Perspiciatis hic iure voluptatem.
                </p>
            </div>
        </div>
    );
};

export default Index;
