import React from "react";
import { WrapCover } from "./theme";

class Cover extends React.Component {

    render() {
        const {image} = this.props;
        let bg = image ? { backgroundImage:`url(${image})` } : {};

        return (
            <WrapCover style={bg}>
                
            </WrapCover>
        );
    }
}

export default Cover;