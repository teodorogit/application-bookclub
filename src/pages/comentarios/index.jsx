import React from "react";
import Header from "../../layout/Header";
import classes from "./style.module.css";

const Index = () => {
    return (
        <div>
            <Header title="Participe" />
            <section className={classes.section1}>
                <h3>Deixe aqui uma sugestão de livro </h3>
                <form>
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" placeholder="Titulo" required />
                    <label htmlFor="autor">Autor</label>
                    <input type="text" placeholder="Autor" required />
                    <label htmlFor="">Onde comprar</label>
                    <input type="text" placeholder="Opcional" />
                    <button className={classes.btn_submit}>Enviar</button>
                </form>
            </section>
        </div>
    );
};

export default Index;
