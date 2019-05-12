import React from "react";
import PropTypes from "prop-types";


import { Spring } from 'react-spring/renderprops';
import { easePolyOut } from 'd3-ease';
import { DialogBg, DialogContent, EmptyContent } from "./theme";


class AnimateDialog extends React.Component {
    static propTypes = {
        source: PropTypes.object,
        maxWidth: PropTypes.number,
        maxHeight: PropTypes.number,
        onStartClose: PropTypes.func,
        onClose: PropTypes.func
    };

    state = { status: "opening" }

    componentWillMount() {
        // Prevent scroll
        document.body.style.overflow = "hidden";
        document.body.classList.add('modal-open');
    }

    componentWillUnmount() {
        document.body.style.overflow = null;
        document.body.classList.remove('modal-open');
    }

    /**
     * Calcola posizione iniziale del frame usando il bound dell'elemento
     * dove è stato cliccato il bottone
     */
    contentStyleFromAnimation = () => {
        const { source } = this.props;
        if (source) {
            const bound = source.getBoundingClientRect();
            return {
                top: bound.top,
                left: bound.left,
                width: bound.width,
                height: bound.height
            }
        }
        return { top: 0, left: 0, width: 0, height: 0 };
    }

    /**
     * Calcola dimensioni e posizione del dialog
     */
    contentStyleToAnimation = () => {
        const { maxWidth, maxHeight } = this.props;
        let width = maxWidth ? maxWidth : 957;
        let height = maxHeight ? maxHeight : 658;
        width = Math.min(width, window.innerWidth);
        height = Math.min(height, window.innerHeight);
        let top = window.innerHeight * 0.11;
        return {
            left: (window.innerWidth - width) / 2,
            top: Math.min(top, (window.innerHeight - height) / 2),
            width: width,
            height: height
        }
    }

    /** 
     * Gestione fine animazione apertura/chiusura popup
     */
    onFinishAnimation = () => {
        if (this.state.status === "opening") {
            this.setState({ status: "open" });
        }
        if (this.state.status === "closing") {
            this.setState({ status: "close" });
            const { onClose } = this.props;
            if (onClose) {
                onClose();
            }
        }
    }

    /** Gestione richiesta chiusura popup */
    onRequestClose = () => {
        this.setState({ status: "closing" });
        const { onStartClose } = this.props;
        if (onStartClose) {
            onStartClose()
        }
    }

    /** Aggiunge l'handle chiusura popup hai figli */
    injectCloseChildreen = () => {
        return React.Children.map(this.props.children, child =>
            React.cloneElement(child, { ...child.props, onClose: this.onRequestClose }));
    }

    render() {
        const content = this.state.status === "open" ? this.injectCloseChildreen() : <EmptyContent />
        let reverse = this.state.status === "closing";
        return (
            <div>
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    reset={reverse}
                    reverse={reverse}
                >
                    {props => <DialogBg style={props} />}
                </Spring>
                <Spring
                    reset={reverse}
                    reverse={reverse}
                    config={{ duration: 200, easing: easePolyOut }}
                    from={this.contentStyleFromAnimation()}
                    to={this.contentStyleToAnimation()}
                    onRest={this.onFinishAnimation}
                >
                    {props => (
                        <DialogContent style={props}>
                            {content}
                        </DialogContent>
                    )}
                </Spring>
            </div>
        );
    }
}

export default AnimateDialog;
