import React from "react";
import PropTypes from "prop-types";

class Icon extends React.Component {

    static propTypes = {
        icon: PropTypes.string
    };

    render() {
        const { icon, alt, ...props } = this.props;
        const path = `/assets/images/icons/${icon}.png`;
        return (
            <img src={path} alt={alt} {...props} />
        );
    }
}

export default Icon;