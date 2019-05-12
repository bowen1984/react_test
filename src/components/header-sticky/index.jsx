import React from "react";


import { StickyContainer } from "./theme";
//336
class HeaderSticky extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: this.getType()
        }
    }

    componentWillMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const type = this.getType();
        if (type !== this.state.type) {
            this.setState({ type });
        }
    }

    getType = () => {
        const { maxScroll } = this.props;
        const scrollTop = window.pageYOffset;
        return ( maxScroll && scrollTop > maxScroll ) ? "absolute" : "default";
    }


    calcolateStyle = () => {
        const { maxScroll } = this.props;
        const type = this.getType();
        return type === "absolute" ? { position:"absolute", top:`${maxScroll}px` } : {};
    }

    render() {
        return (
            <StickyContainer style={this.calcolateStyle()}>
                {this.props.children}
            </StickyContainer>

        );
    }
}

export default HeaderSticky;