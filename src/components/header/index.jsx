import React from "react";
import PropTypes from "prop-types";
import Menu from "components/menu";
import HeaderSticky from "components/header-sticky";
import { WrapHeader, Logo, Bar, EmptyCol, LogoCol, MenuCol } from "./theme";
import { MainContainer } from "components/theme";

class Header extends React.Component {

    static propTypes = {
        menu: PropTypes.array
    };

    render() {
        const { menu } = this.props;
        return (
            <WrapHeader>
                <HeaderSticky maxScroll={340}>
                    <MainContainer>
                        <Bar>
                            <LogoCol><Logo>Asdrubale</Logo></LogoCol>
                            <MenuCol><Menu items={menu} /></MenuCol>
                            <EmptyCol />
                        </Bar>
                    </MainContainer>
                </HeaderSticky>
            </WrapHeader>
        );
    }
}

export default Header;