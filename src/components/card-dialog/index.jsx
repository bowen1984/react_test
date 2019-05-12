import React from "react";
import { Spring } from 'react-spring/renderprops';
import {  easeCubicOut } from 'd3-ease';

import SlideGallery from "components/slide-gallery";
import { Container, WrapDescription, WrapGallery, Description, WhiteBg } from "./theme";


class CardDialog extends React.Component {

    state = { closing: false };

    onFinishAnimation = () =>{
        if(this.state.closing){
            const {onClose } = this.props;
            if(onClose){
                onClose();
            }   
        }
    }

    render() {
        const { card } = this.props;
        if (card) {
            const { description, gallery } = card;
            return (
                <Container onClick={() => { this.setState({ closing: true }) }}>
                    <Spring
                        config={{ duration: 300, easing: easeCubicOut }}
                        from={{ top: "100%" }}
                        to={{ top: "50%" }}
                        delay={this.state.closing ? 150:0}
                        reset={this.state.closing}
                        reverse={this.state.closing}
                        onRest={this.onFinishAnimation}
                    >
                        {props => (
                            <WhiteBg style={props} />
                        )}
                    </Spring>
                    <WrapDescription>
                        <Spring
                            config={{ duration: 400,  easing: easeCubicOut  }}
                            from={{ opacity: 0, transform: "translate(0,25px)" }}
                            to={{ opacity: 1, transform: "translate(0,0px)" }}
                            delay={this.state.closing ? 0 : 200}
                            reset={this.state.closing}
                            reverse={this.state.closing}
                        >
                            {props => (
                                <Description style={props}>{description}</Description>
                            )}
                        </Spring>
                    </WrapDescription>
                    <WrapGallery>
                        <Spring
                            config={{ duration: 300,easing:easeCubicOut }}
                            delay={this.state.closing ? 100 : 110 }
                            from={{ opacity: 0, transform: "translate(0,25px)" }}
                            to={{ opacity: 1, transform: "translate(0,0px)" }}
                            reset={true}
                            reverse={this.state.closing}
                        >
                            {props => (
                                <div style={props}>
                                    <SlideGallery images={gallery} />
                                </div>
                            )}
                        </Spring>
                    </WrapGallery>
                </Container>
            );
        }
        return null;
    }
}

export default CardDialog;
