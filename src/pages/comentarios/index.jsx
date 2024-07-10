import React, { useState } from "react";
import Header from "../../layout/Header";
import classes from "./style.module.css";
import { PiBookOpenLight } from "react-icons/pi";
import { FiMapPin } from "react-icons/fi";
import ModalPopUp from "../../layout/popUp";

const Index = () => {
    const [popUPLivro, setPopUpLivro] = useState(false);
    const [popUpLocal, setPopUpLocal] = useState(false);

    const [mostrarSugestao, setMostrarSugestao] = useState({
        livro: false,
        local: false,
    });

    const handleMostrarSugestao = (tipo) => {
        setMostrarSugestao((prevState) => ({
            ...prevState,
            livro: tipo === "livro" ? true : false,
            local: tipo === "local" ? true : false,
        }));
    };

    function handleSubmitLivro(event) {
        event.preventDefault();
        const form = event.target;
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());

        window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: "matheusdevteodoro@gmail.com",
            Password: "FA632CCFEEC92C39E916C772E9151EF6C2B9",
            To: "matheusdevteodoro@gmail.com",
            From: "matheusdevteodoro@gmail.com",
            Subject: "Nova sugestão de livro - Clube do livro:",
            Body: `Dados recebidos:<br><br>
            Titulo do livro: ${data.titulo}<br>Autor: ${data.autor}<br>Onde comprar: ${data.comprar}`,
        })
            .then(() => {
                form.reset();
            })
            .catch((error) => alert("Erro ao enviar o e-mail: " + error));
        setTimeout(() => {
            setPopUpLivro(false);
        }, 4200);
        setPopUpLivro(true);
    }

    function handleSubmitLocal(event) {
        event.preventDefault();
        const form = event.target;
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());

        window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: "matheusdevteodoro@gmail.com",
            Password: "FA632CCFEEC92C39E916C772E9151EF6C2B9",
            To: "matheusdevteodoro@gmail.com",
            From: "matheusdevteodoro@gmail.com",
            Subject: "Nova sugestão de Local de encontro- ",
            Body: `Dados recebidos:<br><br>
            Estabelecimento: ${data.estabelecimento}<br>Endereço: ${data.endereco}`,
        })
            .then(() => {
                form.reset();
            })
            .catch((error) => alert("Erro ao enviar o e-mail: " + error));
        setTimeout(() => {
            setPopUpLocal(false);
        }, 4200);
        setPopUpLocal(true);
    }
    return (
        <div>
            <Header title="Participe" />
            <div>
                <button
                    style={{ backgroundColor: " rgb(9, 117, 9)" }}
                    id={classes.sugestao_livro}
                    onClick={() => handleMostrarSugestao("livro")}
                >
                    Deixe a sua sugestão de livro
                </button>
                {mostrarSugestao.livro && (
                    <div>
                        {!popUPLivro && (
                            <section className={classes.section1}>
                                <div style={{ display: "flex", height: "20px", justifyContent: "center" }}>
                                    {/* Ícone ou título para sugestão de livro */}
                                    <PiBookOpenLight size={34} color="#555" />
                                </div>
                                <form onSubmit={handleSubmitLivro}>
                                    <label htmlFor="titulo">Titulo</label>
                                    <input type="text" placeholder="Titulo" required name="titulo" />
                                    <label htmlFor="autor">Autor</label>
                                    <input type="text" placeholder="Autor" required name="autor" />
                                    <label htmlFor="">Onde comprar</label>
                                    <input type="text" placeholder="Opcional" name="comprar" />
                                    <button className={classes.btn_submit}>Enviar</button>
                                </form>
                                {popUPLivro && <ModalPopUp />}
                            </section>
                        )}
                    </div>
                )}
            </div>
            <div>
                <button
                    style={{ backgroundColor: " rgb(114, 169, 78)" }}
                    id={classes.sugestao_livro}
                    onClick={() => handleMostrarSugestao("local")}
                >
                    Sugerir Local de encontro
                </button>
                {mostrarSugestao.local && (
                    <div>
                        {!popUpLocal && (
                            <section className={classes.section1}>
                                <div style={{ display: "flex", height: "20px", justifyContent: "center" }}>
                                    {/* Ícone ou título para sugestão de localização */}
                                    <FiMapPin size={34} color="#999" />
                                </div>
                                <form onSubmit={handleSubmitLocal}>
                                    <label htmlFor="tipo">Tipo de estabelecimento</label>
                                    <input
                                        type="text"
                                        placeholder="Shopping, livraria, cafeteria, etc"
                                        required
                                        name="estabelecimento"
                                    />
                                    <label htmlFor="endereco">Endereço</label>
                                    <input type="text" placeholder="Av, nome da avenida, nº" required name="endereco" />
                                    <button className={classes.btn_submit}>Enviar</button>
                                </form>
                            </section>
                        )}
                        {popUpLocal && <ModalPopUp />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Index;
