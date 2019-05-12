import React from "react";
import PropTypes from "prop-types";
import { WrapCover } from "./theme";

class Cover extends React.Component {
    static propTypes = {
        image: PropTypes.string
    };

    render() {
        const {image} = this.props;
        let bg = image ? { backgroundImage:`url(${image})` } : {};
        return (
            <WrapCover style={bg}>
                {this.props.children}
            </WrapCover>
        );
    }
}

export default Cover;