import React from "react";
import PropTypes from "prop-types"

import Card from "components/card";
import { WrapCard,List } from "./theme";

class ListCard extends React.Component {

    static propTypes = {
        cards: PropTypes.array,
        onSelectCard: PropTypes.func,
        selected: PropTypes.number
    };

    render() {
        const { cards, onSelectCard, selected } = this.props;
        if (cards) {
            return (
                <List>
                    {cards.map((card, i) => {
                        return (
                            <WrapCard key={`c${i}`} >
                                <Card card={card} onSelect={onSelectCard} selected={selected} />
                            </WrapCard>
                        );
                    })}
                </List>
            );
        }
        return null;
    }
}

export default ListCard;