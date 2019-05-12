import styled from "styled-components";

import { colors } from "components/theme";




export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    background-color: ${colors.yellow}
    overflow:hidden;
    border-radius:12px;
`;

export const WhiteBg = styled.div`
    position:absolute;
    bottom:0px;
    top:100%;
    width:100%;
    background-color:#fff;
    -webkit-border-radius: 0 0 12px 12px;
    border-radius: 0 0 12px 12px;
`;


export const WrapDescription = styled.div`
    position:relative;
    display:flex;
    height:50%
    flex-direction:column;
    justify-content:center;
    padding:75px 97px;
    z-index:2;
    max-width:650px;
`;

export const WrapGallery = styled.div`
    position:relative;
    display:flex;
    height:50%
    flex-grow:1;
    flex-direction:column;
    justify-content:center;
    padding:0px;
    z-index:2;
`;

export const Description = styled.div`
    font-size: 26px;
    color: #000000;
    letter-spacing: 0;
    line-height: 32px;
`;

export const Images = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    overflow:hidden;
    height:179px;
    margin-left:-10px;
    margin-right:-10px;
`;

export const Img = styled.div`
    display:block;
    margin:0px 10px;
`;
