import React from "react";
import PropTypes from "prop-types";

import { WrapGallery, Img, WrapImages } from "./theme";

class SlideGallery extends React.Component {

    static propTypes = {
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string,
                alt: PropTypes.string
            })
        )
    };

    render() {
        const { images } = this.props;
        if (images) {
            return (
                <WrapGallery>
                    <WrapImages>
                        {images.map((image, i) => {
                            const { src, alt } = image;
                            return (<Img key={`img${i}`} src={src} alt={alt} />);
                        })}
                    </WrapImages>
                </WrapGallery>
            );
        }
        return null;
    }
}

export default SlideGallery;