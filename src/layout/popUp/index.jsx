import React from "react";
import classes from "./style.module.css";

const index = () => {
    return (
        <div className={classes.bkg}>
            <div className={classes.container}>
                <h3>Deu tudo certo!</h3>
                <p>Obrigado por enviar sua sugestão! Sua participação é sempre bem vinda, juntos podemos mais</p>
                <span>Clube do livro</span>
            </div>
        </div>
    );
};

export default index;
