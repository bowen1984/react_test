import React from "react";


import IconImg from "components/icon";
import { WrapCard, Icon, Title, Description, ZoomButton } from "./theme";

class Card extends React.Component {

    el = null;

    isSelected = () =>{
        const { selected, card } = this.props;
        return  (card && card.id === selected);
    }

    onClickZoom = () => {
        if (this.el == null) {
            return;
        }
        this.setState({selected:true});
        const { onSelect, card } = this.props;
        if (onSelect) {
            onSelect(card, this.el);
        }
    }

    initElement = (el) => {
        this.el = el;
    }

    getStyleCard = (number) => {
        let style={};
        if (number) {
            style.backgroundImage =  `url(/assets/images/cards/${number}.png)`
        }
        if(this.isSelected()){
            style.marginBottom=window.innerHeight;
            style.opacity=0;
        }
        return style;
    }

    render() {
        const { card } = this.props;
        const { icon, title, description, number, gallery } = card;
        return (
            <WrapCard style={this.getStyleCard(number)} ref={this.initElement}>
                {icon && <Icon><IconImg icon={icon} /></Icon>}
                {title && <Title>{title}</Title>}
                {description && <Description>{description}</Description>}
                {gallery && <ZoomButton onClick={this.onClickZoom}>{"Clicca qui"}</ZoomButton>}
            </WrapCard>
        );
    }
}

export default Card;
