import React, { useState, useEffect } from "react";
import {
    HeaderDiv,
    SectionDiv,
    Container,
    FooterDiv,
    Buttons,
    BlobBlob,
    BlobInner,
    BlobButton,
    BlobBlobs,
} from "./style.jsx";
import fundo from "../../img/fundo.jpg";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FiFileText } from "react-icons/fi";
import { PiStarThin } from "react-icons/pi";
import { RiUserVoiceLine } from "react-icons/ri";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobilePage = width <= 768;
    const navigation = useNavigate();
    const [fraseAtual, setFraseAtual] = useState("");

    useEffect(() => {
        const fraseSelecionada = getRandomFrase();
        setFraseAtual(fraseSelecionada);
    }, []);

    const handlePage = () => {
        setTimeout(() => {
            navigation("/informacoes");
        }, 1500);
    };

    function getRandomFrase() {
        const randomIndex = Math.floor(Math.random() * frases.length);
        return frases[randomIndex];
    }

    const frases = [
        "Não existe um caminho para a felicidade. A felicidade é o caminho. - Mahatma Gandhi",
        "O que importa é o que você pensa de si mesmo. - Henry Thoreau",
        "Penso, logo existo. - René Descartes",
        "A verdadeira viagem do descobrimento não consiste em procurar novas paisagens, e sim em ter novos olhos. - Marcel Proust",
        "Tudo que você pode imaginar é real. - Pablo Picasso",
        "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
        "A persistência é o caminho do êxito. - Charles Chaplin",
        "A vida é 10% o que acontece a você e 90% como você reage a isso. - Charles Swindoll",
        "O importante não é vencer todos os dias, mas lutar sempre. - Waldemar Valle Martins",
        "Não espere por uma crise para descobrir o que é importante em sua vida. - Platão",
    ];

    function getRandomFrase() {
        const randomIndex = Math.floor(Math.random() * frases.length);
        return frases[randomIndex];
    }

    function FooterDivs({ frase }) {
        return (
            <FooterDiv>
                <p>{frase}</p>
            </FooterDiv>
        );
    }

    return (
        <>
            <HeaderDiv>
                <h2>App Clube do Livro</h2>
            </HeaderDiv>

            <Container>
                <SectionDiv>
                    <div>
                        <HiOutlineMapPin color="#731728" />
                        <p>Locais dos encontros literários</p>
                    </div>
                    <div>
                        <FiFileText color="#BFAC4B" size={20} />
                        <p>Lista de leitora em grupo</p>
                    </div>
                    <div>
                        <PiStarThin color="#BF372A" />
                        <p>Wish list dos nossos organizadores do clube</p>
                    </div>
                    <div>
                        <RiUserVoiceLine fill="#8C7632" />
                        <p> Feedback e argumentações de livros já lidos em grupo</p>
                    </div>{" "}
                    {/* <h3 style={{ marginTop: "100px" }}>
                        <span> Aloha leitores!</span>
                    </h3> */}
                </SectionDiv>
            </Container>

            <div style={{ marginTop: "40px" }}>
                <Buttons>
                    <BlobButton onClick={handlePage}>
                        Entrar
                        <BlobInner>
                            <BlobBlobs>
                                <BlobBlob />
                                <BlobBlob />
                                <BlobBlob />
                                <BlobBlob />
                            </BlobBlobs>
                        </BlobInner>
                    </BlobButton>
                </Buttons>
            </div>
            <FooterDivs frase={fraseAtual} />

            {/* <Btn>Entrar</Btn> */}
        </>
    );
};

export default Index;
