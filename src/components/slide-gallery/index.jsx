import React from "react";
import { WrapGallery, Img, WrapImages} from "./theme";

class SlideGallery extends React.Component {

    /**
     * Crea la griglia delle foto
     * 1 grande e 2 piccole
     */
    createGalleryItems = () =>{
        const { images } = this.props;
        let items = [];
        images.forEach((image,i)=>{
            const {src,alt} = image;
            items.push(<Img key={`img${i}`} src={src} alt={alt} />);
        })
        return items;
    }


    render() {
        const items = this.createGalleryItems();
        if(items){
            return (
                <WrapGallery>
                    <WrapImages>{items}</WrapImages>  
                </WrapGallery>
            );
        }
        return null;
    }
}

export default SlideGallery;