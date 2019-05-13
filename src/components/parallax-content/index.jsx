import React from "react";
import PropTypes from "prop-types";

class ParallaxContent extends React.Component {

    static propTypes = {
        scrollEnd: PropTypes.number,
        velocity: PropTypes.number,
        start: PropTypes.number,
        minWidth: PropTypes.number
    };


    constructor(props) {
        super(props);
        this.state = {
            scrollTop: this.getScroll()
        }       
    }

    componentWillMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    getScroll = () =>{
        const { scrollEnd } = this.props;
        return scrollEnd && scrollEnd < window.pageYOffset ? scrollEnd : window.pageYOffset;
    }

    handleScroll = () => {
        const scroll = this.getScroll();
        if (scroll !== this.state.scrollTop ){
            this.setState({ scrollTop: scroll });
        }
    }

    calcolateStyle = () => {
        const { start, velocity, minWidth } = this.props;
        let mW = minWidth ? minWidth : 0;
        if (start && velocity && mW < window.innerWidth) {
            const marginTop = start + this.state.scrollTop * velocity;
            return {
                marginTop
            };
        }
        return {};
    }

    render() {
        return (
            <div style={this.calcolateStyle()}>
                {this.props.children}
            </div>
        );
    }
}

export default ParallaxContent;