import styled from "styled-components";
import { colors } from "components/theme";

//TODO Da sostituire con link di react-router
export const MenuItems =  styled.a`
    font-size: 14px;
    color: ${colors.gray};
    letter-spacing: 1px;
    margin:0px 15px;
    text-transform:uppercase;

    @media (max-width:400px){
        margin:0px 10px;
        font-size:12px;
    }
`;

export const WrapItems = styled.div`
    text-align:center;
    @media (max-width:750px){
        text-align:right;
    }
`;