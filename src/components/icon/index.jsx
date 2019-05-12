import React from "react";


class Icon extends React.Component {

    render() {
        const {icon} = this.props;
        const path = `/assets/images/icons/${icon}.png`;
        return (
            <img src={path} />
        );
    }
}

export default Icon;