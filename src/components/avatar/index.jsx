import React from "react";
import PropTypes from "prop-types";

import { Wrap, Image, Name } from "./theme";

class Avatar extends React.Component {
    
    static propTypes = {
        info: PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string
        })
    };

    render() {
        const { info } = this.props;
        const { avatar, name } = info;
        return (
            <Wrap>
                {avatar && (<Image><img src={avatar} alt="avatar" /></Image>)}
                {name && (<Name>{name}</Name>)}
            </Wrap>
        );
    }
}

export default Avatar;