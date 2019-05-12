import styled, { createGlobalStyle } from "styled-components";

/** COLORI TEMA */
export const colors = {
    gray: "#9B9B9B",
    lightGray: "#D8D8D8",
    titleColor: "#000000",
    textColor: "#4A4A4A",
    yellow: "#F8E627"
}


export const pageSize = 1152;


/** WRAP CONTENUTI PRINCIPALI PAGINA */
export const MainContainer = styled.div`
    max-width:${pageSize}px;
    margin:0px auto;

    @media (max-width:1200px){
        max-width:900px;
    }

    @media (max-width:900px){
        max-width:750px;
    }
`;

export const Row = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content: space-between;
`;

export const MainCol = styled.div`
    width:566px;
    @media (max-width:1200px){
        width:500px;
    }
    @media (max-width:900px){
        width:100%;
    }
`;

export const SecondaryCol = styled.div`
    width:310px;

    @media (max-width:1200px){
        width:250px;
    }

    @media (max-width:900px){
        width:100%;
    }
`;


export const GlobalStyle = createGlobalStyle`
    #root{
        -webkit-transition: margin 0.3s ease-out;
        -moz-transition: margin 0.3s ease-out;
        -ms-transition: margin 0.3s ease-out;
        -o-transition: margin 0.3s ease-out;
        transition: margin 0.3s ease-out;
    }
    .modal-open #root{
        margin-top:-100px;
    }
`;