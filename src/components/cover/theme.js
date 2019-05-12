import styled from "styled-components";


export const WrapCover = styled.div`
    background-size:cover;
    background-position: center top;
    width:100%;
    height:640px;

    @media (max-width:700px){
        height:70vh;
    }
`;