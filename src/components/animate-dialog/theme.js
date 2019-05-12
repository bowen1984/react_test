import styled from "styled-components";
import { colors } from "components/theme";

export const DialogBg = styled.div`
    position:fixed;
    top:0px;
    left:0px;
    right:0px;
    bottom:0px;
    overflow:hidden;
    background-color:#565456;
`;

export const DialogContent = styled.div`
    position:fixed;
    z-index:10;
`;


export const EmptyContent = styled.div`
    width:100%;
    height:100%;
    background-color: ${colors.yellow}
    border-radius:12px;
`;