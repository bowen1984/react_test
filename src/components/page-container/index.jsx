import React from "react";

import AnimatedBg from "components/animated-bg";
import { MainContainer } from "components/theme";
import { Content,Main } from "./theme";

class PageContainer extends React.Component {
    render() {
        return (
            <Main>
                <AnimatedBg color={"#ffffff"} offsetStart={-12}/>
                <MainContainer>
                    <Content>
                        {this.props.children}
                    </Content>
                </MainContainer>
            </Main>
        );
    }
}

export default PageContainer;