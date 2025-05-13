import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 5% 10%;
    width: 97%;
    margin: 0 auto;
    margin-top: -50px;
`;

export const Btn = styled.button`
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 80%;
    bottom: 10px;
    height: 50px;
    transform: translateX(-50%);
`;

export const HeaderDiv = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 15px auto;
    width: 90%;

    > div > h3 {
        color: #555;
        font-weight: normal;
    }
    > h4 {
        box-shadow: -5px 0px 10px 0px #b7b7e74a;
        border-radius: 30px;
        border-bottom: 15px solid #0d0de6ab;
        padding: 8px 16px;
        width: 90%;
        margin: 0 auto;
        margin-top: 10px;
        color: #111;
        font-size: 24px;
        transition: all 200ms ease-in-out;
        &:hover {
            background-color: #0d0de6ab;
            border-bottom: 15px solid white;
            cursor: pointer;
            > span {
                color: white;
            }
        }
    }

    > h2 {
        text-align: center;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        color: #111;
        letter-spacing: 1.2px;
        border-bottom: 2px solid #7fad7a;
        padding: 5px;
        width: 100%;
    }
`;
export const HeaderComponent = styled.div`
    margin-bottom: 60px;
`;
export const SectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    > h3 {
        font-family: "Poppins", sans-serif;
        color: #111;
        font-size: 14px;
        text-align: center;
        > span {
            border-left: 2px solid #bf372a;
            background-color: #f5b2ac4d;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            padding: 5px 10px;
            font-size: 18px;
        }
    }
    > div {
        display: flex;
        align-items: space-between;
        gap: 20px;
        > p {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-style: normal;
            color: #333;
            font-size: 13px;
        }
        > svg {
            color: #000;
            font-size: 34px;
        }
    }
`;

export const FooterDiv = styled.div`
    display: flex;
    border-bottom: 5px solid #f66b2b92;
    justify-content: center;
    background-color: #faa40442;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 9px;
    padding: 10px 5px;
    flex-direction: column;
    width: 90%;
    /* @media (max-width: 400px) {
        height: 15vh;
        > img {
            width: 170px;
            display: flex;
            margin: 0 auto;
        }
    } */

    > p {
        text-align: center;
        font-family: "Poppins", sans-serif;
        color: #222;
        font-style: italic;
    }
`;

export const Buttons = styled.div`
    margin-top: 10px;
    text-align: center;
    border-radius: 30px;
`;

export const BlobButton = styled.button`
    --cyan: #f66b2b;
    --dark: #ffffff;
    --borderW: 2px;
    --numOfBlobs: 4;
    z-index: 1;
    position: relative;
    padding: 20px 46px;
    width: 85%;
    text-align: center;
    text-transform: uppercase;
    color: var(--cyan);
    font-size: 16px;
    font-weight: bold;
    background-color: transparent;
    outline: none;
    transition: color 0.5s;
    border: none;
    cursor: pointer;
    border-radius: 30px;
    @media (min-height: 620px) {
        margin-top: 60px;
    }

    &:before {
        content: "";
        z-index: 1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: var(--borderW) solid var(--cyan);
        border-radius: 30px;
    }

    &:after {
        content: "";
        z-index: -2;
        position: absolute;
        left: calc(var(--borderW) * 1.5);
        top: calc(var(--borderW) * 1.5);
        width: 100%;
        height: 100%;
        transition: all 0.3s 0.2s;
        border-radius: 30px;
    }

    &:hover {
        color: var(--dark);
        border-radius: 30px;

        &:after {
            transition: all 0.3s;
            left: 0;
            top: 0;
            border-radius: 30px;
        }
    }
`;

export const BlobInner = styled.div`
    z-index: -1;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: #ffffff;
`;

export const BlobBlobs = styled.span`
    position: relative;
    display: block;
    height: 100%;
    filter: url("#goo");
`;

export const BlobBlob = styled.span`
    position: absolute;
    top: var(--borderW);
    width: calc(100% / var(--numOfBlobs));
    height: 100%;
    background: var(--cyan);
    border-radius: 100%;
    transform: translate3d(0, 150%, 0) scale(1.7);
    transition: transform 0.45s;

    @supports (filter: url("#goo")) {
        transform: translate3d(0, 150%, 0) scale(1.4);
    }

    &:nth-child(1) {
        left: 0%;
        transition-delay: 0s;
    }
    &:nth-child(2) {
        left: 25%;
        transition-delay: 0.08s;
    }
    &:nth-child(3) {
        left: 50%;
        transition-delay: 0.16s;
    }
    &:nth-child(4) {
        left: 75%;
        transition-delay: 0.24s;
    }

    ${BlobButton}:hover & {
        transform: translateZ(0) scale(1.7);

        @supports (filter: url("#goo")) {
            transform: translateZ(0) scale(1.4);
        }
    }
`;
