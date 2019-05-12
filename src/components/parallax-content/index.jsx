import React from "react";

class ParallaxContent extends React.Component {

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
        window.addEventListener("scroll", this.handleScroll);
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
        const { start, velocity } = this.props;
        if (start && velocity) {
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