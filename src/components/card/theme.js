import styled from "styled-components";


export const WrapCard = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    min-height:414px;
    box-sizing:border-box;
    padding:28px;
    background-color:#F8E627;
    border-radius:12px;
    background-repeat:no-repeat;
    background-position:left top;
    z-index:1;
    position:relative;
    opacity:1

    -webkit-transition: margin 0.4s ease-out;
    -moz-transition: margin 0.4s ease-out;
    -ms-transition: margin 0.4s ease-out;
    -o-transition: margin 0.4s ease-out;
    transition: margin 0.4s ease-out;
`;

export const Icon = styled.div`
    margin-bottom:20px;
`;

export const Title = styled.div`
    font-size: 14px;
    color: #000000;
    letter-spacing: 0;
    line-height: 16px;
    margin-bottom:20px;
`;

export const Description = styled.div`
    font-size: 26px;
    color: #000000;
    letter-spacing: 0;
    line-height: 32px;

`;

export const ZoomButton = styled.div`
    cursor:pointer;
    width:100%;
    border:1px solid #3A405B;
    border-radius:8px;
    font-size: 14px;
    color: #000000;
    letter-spacing: 2px;
    text-align: center;
    line-height: 16px;
    text-transform:uppercase;
    padding:18px;
    margin-top:60px;
`;