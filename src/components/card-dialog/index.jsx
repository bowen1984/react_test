import React from "react";
import PropTypes from "prop-types";

import { Spring } from 'react-spring/renderprops';
import { easeCubicOut } from 'd3-ease';

import SlideGallery from "components/slide-gallery";
import { Container, WrapDescription, WrapGallery, Description, WhiteBg } from "./theme";


/** PARAMETRI ANIMAZIONE */
const animation={
    easing: easeCubicOut,
    bg:{
        duration:300,
        delay:[0,150]
    },
    gallery:{
        duration:300,
        delay:[110,100]
    },
    desc:{
        duration:400,
        delay:[0,200]
    }
};
/**  */

class CardDialog extends React.Component {
    
    static propTypes = {
        card: PropTypes.shape({
            description: PropTypes.string,
            gallery: PropTypes.array
        }),
        onClose: PropTypes.func
    };

    state = { closing: false };
   
    onFinishAnimation = () => {
        if (this.state.closing) {
            const { onClose } = this.props;
            if (onClose) {
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
                        config={{ duration: animation.bg.duration, easing: animation.easing }}
                        from={{ top: "100%" }}
                        to={{ top: "50%" }}
                        delay={this.state.closing ? animation.bg.delay[1] : animation.bg.delay[0]}
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
                            config={{ duration: animation.desc.duration, easing: animation.easing }}
                            from={{ opacity: 0, transform: "translate(0,25px)" }}
                            to={{ opacity: 1, transform: "translate(0,0px)" }}
                            delay={this.state.closing ? animation.desc.duration[1] : animation.desc.duration[0]}
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
                            config={{ duration: animation.gallery.duration, easing: animation.easing  }}
                            delay={this.state.closing ? animation.desc.delay[1] : animation.desc.delay[0]}
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
