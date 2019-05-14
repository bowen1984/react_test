import React from "react";
import PropTypes from "prop-types";

import { Bg } from "./theme";

class AnimatedBd extends React.Component {
    static propTypes = {
        offsetStart: PropTypes.number,
        color: PropTypes.string
    };

    el = null;
    state={width:0}

    componentWillMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
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
        return {
            backgroundColor: color,
            width: this.state.width
        };
    }

    render() {
        return (
            <Bg style={this.getStyle()} ref={this.initElement} />
        );
    }
}

export default AnimatedBd;