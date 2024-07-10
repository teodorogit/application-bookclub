import React from "react";
import "./style.css";
import { SiGooglemaps } from "react-icons/si";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegAddressBook } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HeaderDiv } from "../../pages/homePage/style";

const Index = ({ title }) => {
    const navigation = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        navigation("/");
    };
    return (
        <>
            <HeaderDiv>
                <h2>
                    Clube do Li<span>vro</span>
                </h2>
                <div id="titulo">
                    <h3>{title}</h3>
                </div>
            </HeaderDiv>

            <div id="headline">
                <div className="section">
                    <Link to="/informacoes">
                        <FaRegAddressBook />
                    </Link>
                </div>
                <div className="section">
                    <Link to="/localizacao">
                        <SiGooglemaps size={20} />
                    </Link>
                </div>
                <div className="section">
                    <Link to="/comentarios">
                        <FaRegComment />
                    </Link>
                </div>
                <div>
                    <button id="btn_back" onClick={handleBack}>
                        Sair
                    </button>
                </div>
            </div>
        </>
    );
};

export default Index;
