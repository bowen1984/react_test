import React from "react";

import { Wrap, Image, Name } from "./theme";

class Avatar extends React.Component {

    render() {
        const {info} = this.props;
        const { avatar, name } = info;
        return (
            <Wrap>
                {avatar && (<Image><img src={avatar} /></Image>)}
                {name  && (<Name>{name}</Name>)}
            </Wrap>
        );
    }
}

export default Avatar;