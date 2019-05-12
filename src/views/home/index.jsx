import React from "react";

import Cover from "components/cover";
import ListPost from "components/list-post";
import ListCard from "components/list-card";
import CardDialog from "components/card-dialog";
import PageContainer from "components/page-container";
import ParallaxContent from "components/parallax-content";
import AnimateDialog from "components/animate-dialog";

import { Row, MainCol, SecondaryCol } from "components/theme";

// Caricamento dati 
import PostData from "data/post";
import CardData from "data/card";
// ------------


class Home extends React.Component {

    state = {
        selectCard: null,
        selectCardId: -1
    }

    onCloseZoom = () => {
        this.setState({ selectCard: null, selectCardId: -1 });
    }

    onStartCloseZoom = () => {
        this.setState({ selectCardId: -1 });
    }

    onOpenCard = (cardData, source) => {
        this.setState({
            selectCardId: cardData.id,
            selectCard: {
                card: cardData,
                element: source
            }
        });
    }

    render() {
        // Popup Card
        let dialog = null;
        if (this.state.selectCard) {
            dialog = (
                <AnimateDialog
                    source={this.state.selectCard.element}
                    onStartClose={this.onStartCloseZoom}
                    onClose={this.onCloseZoom}>
                    <CardDialog card={this.state.selectCard.card} />
                </AnimateDialog>
            );
        }

        return (
            <React.Fragment>
                <Cover image={"assets/images/cover.png"} />
                <ParallaxContent start={-188} scrollEnd={340} velocity={-0.19411}>
                    <PageContainer>
                        <Row>
                            <MainCol>
                                <ListPost posts={PostData} />
                            </MainCol>
                            <SecondaryCol>
                                <ParallaxContent start={-112} scrollEnd={553} velocity={0.29224}>
                                    <ListCard cards={CardData} onSelectCard={this.onOpenCard} selected={this.state.selectCardId} />
                                </ParallaxContent>
                            </SecondaryCol>
                        </Row>
                        {dialog}
                    </PageContainer>
                </ParallaxContent>
            </React.Fragment>
        );
    }
}

export default Home;