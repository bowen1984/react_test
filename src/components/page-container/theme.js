import styled from "styled-components";


export const Main = styled.div`
    position:relative;

`;

export const Content = styled.div`
    background-color:#fff;
    -webkit-border-radius: 12px 12px;
    border-radius: 12px 12px;
    min-height:200px;
    padding:42px 97px;
    position:relative;
    z-index:1;
    
    @media (max-width:1200px){
        padding:42px 50px;
    }

    @media (max-width:500px){
        padding:30px;
    }
`;
