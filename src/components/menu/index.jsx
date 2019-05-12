import React from "react";
import PropTypes from "prop-types";
import { WrapItems, MenuItems } from "./theme";

class Menu extends React.Component {

    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string,
                label: PropTypes.string
            })
        )
    };

    render() {
        const { items } = this.props;
        if (items) {
            return (
                <WrapItems>
                    {items.map((itm, i) => {
                        const { url, label } = itm;
                        return <MenuItems key={`itm${i}`} href={url}>{label}</MenuItems>
                    })}
                </WrapItems>
            );
        }
        return null;
    }
}

export default Menu;