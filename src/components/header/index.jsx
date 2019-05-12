import React from "react";

import Menu from "components/menu";
import HeaderSticky from "components/header-sticky";
import { WrapHeader, Logo, Bar, SideCol, MenuCol } from "./theme";
import { MainContainer } from "components/theme";

class Header extends React.Component {

    render() {
        const {menu} = this.props;
        return (
            <WrapHeader>
                <HeaderSticky maxScroll={340}>
                    <MainContainer>
                        <Bar>
                            <SideCol><Logo>Asdrubale</Logo></SideCol>
                            <MenuCol><Menu items={menu}/></MenuCol>
                            <SideCol></SideCol>
                        </Bar>
                    </MainContainer>
                </HeaderSticky>
            </WrapHeader>
        );
    }
}

export default Header;