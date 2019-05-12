import React from "react";

import { Bg } from "./theme";

class AnimatedBd extends React.Component {

    el = null;
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        }
    }

    componentWillMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    initElement = (el) => {
        this.el = el;
        this.handleScroll();
    }

    handleScroll = () => {
        if (!this.el) {
            return;
        }
        const width = this.getWidth();
        if (width !== this.state.width) {
            this.setState({
                width
            });
        }
    }

    getWidth = () => {
        const { offsetStart } = this.props;
        const start = offsetStart ? offsetStart : 0;
        const top = this.el.getBoundingClientRect().top;
        return top < start ? "100%" : 0;
    }

    getStyle = () => {
        const { color } = this.props;
        let styles = {
            backgroundColor: color
        }
        if (this.state.width !== 0) {
            styles.width = this.state.width;
        }
        return styles;
    }

    render() {
        return (
            <Bg style={this.getStyle()} ref={this.initElement} />
        );
    }
}

export default AnimatedBd;