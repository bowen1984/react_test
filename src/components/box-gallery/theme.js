import styled from "styled-components";


export const WrapGallery = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content: space-between;
`;

export const ColImage = styled.div`
    width:80px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    margin-bottom:20px;
    min-height:190px;
`;

export const BigImg = styled.img`
    width:177px;
    display:block;
    margin-bottom:20px;
`;

export const SmallImg = styled.img`
    width:100%;
    display:block;
`;