import React from "react";
import { WrapItems, MenuItems } from "./theme";

class Menu extends React.Component {
    render() {
        const { items } = this.props;
        if (items) {
            return (
                <WrapItems>
                    {items.map((itm) => {
                        const { url, label } = itm;
                        return <MenuItems key={`itm${url}`} href={url}>{label}</MenuItems>
                    })}
                </WrapItems>
            );
        }
        return null;
    }
}

export default Menu;