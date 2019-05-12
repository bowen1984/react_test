import styled from "styled-components";

import {colors} from "components/theme";


export const Wrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`;

export const Image = styled.div`
    display:block;
    width:26px;
    height:26px;
    overflow:hidden;
    border-radius:100%;
    img{
        display:block;
    }
`;

export const Name = styled.div`
    font-size: 12px;
    color: ${colors.gray};
    line-height: 16px;
    margin-left:10px;
`;

