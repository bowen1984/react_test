import styled from "styled-components";

export const WrapCard =  styled.div`
    margin-bottom:30px;
`;


export const List = styled.div`
    @media (max-width:900px){
        padding-top:30px;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    @media (max-width:700px){
        justify-content:center;
    }
`;