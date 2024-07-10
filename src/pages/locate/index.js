import React from "react";
import classes from "./style.module.css";
import { SiGooglemaps } from "react-icons/si";
import Header from "../../layout/Header";

const index = () => {
    return (
        <div>
            <Header title="Localização" />
            <div id="local">
                <h4>
                    Endereço do <span>proximo</span> encontro:
                </h4>
                <SiGooglemaps size={55} id="localizacao" />
                <a
                    id="ancora"
                    href="https://www.google.com/maps?sca_esv=f8e0b8e673c5569f&sca_upv=1&rlz=1C1VDKB_pt-PTBR1066BR1066&output=search&q=avenida+center&source=lnms&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmi2aC_xrXWMCzvpYJNclNNRKb04-w_Vd0b9bJZ-hvsVLMw4_Am7rELOsgji-m_be4092gfJZ_lqc5QdsNDMZOmTpebCe8Apk7NGjX4rQIDp0FfHw4NArJ9pb4-sptP5wZ4rVzYgnxyrqbv-1f2K_WLETTj2ni80tmmEVbQExwVeyZhon5RGgoo3S_HjtHhmuuq1I6IYg&entry=mc&ved=1t:200715&ictx=111"
                    target="_blank"
                >
                    Shopping Avenida Center
                </a>
            </div>
        </div>
    );
};

export default index;
