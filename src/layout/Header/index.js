import React, { useState } from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { HeaderDiv } from "../../pages/homePage/style";
import { IoCloseOutline } from "react-icons/io5";

const Index = ({ title }) => {
    const navigation = useNavigate();
    const location = useLocation();
    const [activeHeader, setActiveHeader] = useState(false);

    const handleBack = () => {
        navigation("/");
    };

    const handleMenu = () => {
        setActiveHeader((prevtState) => !prevtState);
    };
    return (
        <>
            <HeaderDiv style={{ position: "relative" }}>
                {location.pathname !== "/" && !activeHeader && (
                    <IoIosMenu
                        id="icon_header"
                        style={{ position: "absolute", left: "0px", top: "5px" }}
                        onClick={handleMenu}
                    />
                )}
                <h2>
                    Clube do Li<span>vro</span>
                </h2>
                <div id="titulo">
                    <h3>{title}</h3>
                </div>
            </HeaderDiv>

            {activeHeader && (
                <>
                    <div id="headline">
                        <IoCloseOutline
                            style={{ position: "absolute", right: "15px", top: "10px" }}
                            id="icon_header"
                            onClick={handleMenu}
                        />

                        <div className="section">
                            <Link to="/informacoes">
                                <p>Livro do mês</p>
                            </Link>
                        </div>
                        <div className="section">
                            <Link to="/localizacao">
                                <p>Local</p>
                            </Link>
                        </div>
                        <div className="section">
                            <Link to="/comentarios">
                                <p>Participe</p>
                            </Link>
                        </div>
                        <div className="section">
                            <Link to="/comentarios">
                                <p>Wish lists</p>
                            </Link>
                        </div>
                        <div className="section">
                            <Link to="/comentarios">
                                <p>Feedbacks dos livros</p>
                            </Link>
                        </div>
                        <div id="div_out">
                            <button id="btn_back" onClick={handleBack}>
                                Sair
                            </button>
                        </div>
                    </div>
                    <div id="shadow">1</div>
                </>
            )}
        </>
    );
};

export default Index;
