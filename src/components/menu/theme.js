import styled from "styled-components";
import { colors } from "components/theme";

//TODO Da sostituire con link di react-router
export const MenuItems =  styled.a`
    font-size: 14px;
    color: ${colors.gray};
    letter-spacing: 1px;
    text-align: center;
    line-height: 18px;
    margin:0px 15px;
    text-transform:uppercase;
`;

export const WrapItems = styled.div`
    text-align:center;
`;