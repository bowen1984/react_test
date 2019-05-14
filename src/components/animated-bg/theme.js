import styled from "styled-components";


export const Bg = styled.div`
    position:absolute;
    top:0px;
    height:100%;
    left:50%;
    width:0;

    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

 
    @media (max-width:700px){
        display:none;
    }
`;
