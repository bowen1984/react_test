import styled from "styled-components";


export const Bg = styled.div`
    position:absolute;
    top:0px;
    height:100%;
    left:50%;
    width:1000px


    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;

    -moz-transform: translate(-50%,0%);
    -webkit-transform: translate(-50%,0%);
    -o-transform: translate(-50%,0%);
    -ms-transform: translate(-50%,0%);
    transform: translate(-50%,0%);

    @media (max-width:1200px){
        width:800px;
    }

    @media (max-width:900px){
        width:700px;
    }
    
    @media (max-width:700px){
        display:none;
    }
`;
