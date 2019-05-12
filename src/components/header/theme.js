import styled from "styled-components";

export const WrapHeader = styled.div`
    height:60px;
`;


export const Bar = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:60px;

    @media (max-width:750px){
        padding:0px 20px;
    }
`;

export const EmptyCol = styled.div`
    width:150px;
    @media (max-width:750px){
        display:none;
    }
`;


export const LogoCol = styled.div`
    width:150px;
`;

export const MenuCol = styled.div`
    flex-grow:1;
`;

export const Logo = styled.div`
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;

    @media (max-width:400px){
        font-size:16px;
    }
`;