import styled from "styled-components";
import { colors } from "components/theme";

export const WrapPost = styled.div`
    margin-bottom:30px;
`;

export const Head = styled.h4`
    font-size: 14px;
    color: ${colors.titleColor};
    line-height: 16px;
    padding-bottom:20px;
`;

export const Title = styled.h4`
    color: ${colors.titleColor};
    font-size: 36px;
    line-height: 44px;
    padding-bottom:24px;
`;


export const Description = styled.p`
    color: ${colors.textColor};
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0.5px;
    line-height: 24px;
    padding-bottom:5px;
`;

export const Separator = styled.div`
    height:1px;
    background-color:${colors.lightGray}
    width:100%;
    margin:20px 0px;
`;

export const Footer = styled.div`
    display:flex;
    width:100%;
    flex-direction:row;
`;

export const Fill = styled.div`
    flex-grow:1;
`;

export const Button = styled.a`
    margin-left:20px;
`;

export const WrapGallery = styled.div`
    padding-top:70px;
`;