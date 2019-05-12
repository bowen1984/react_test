import React from "react";
import PropTypes from "prop-types";

import { WrapGallery, ColImage, BigImg, SmallImg } from "./theme";


class BoxGallery extends React.Component {
    
    static propTypes = {
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string,
                alt: PropTypes.string
            })
        )
    };


    /**
     * Crea la griglia delle foto
     * 1 grande e 2 piccole
     */
    createGalleryItems = () =>{
        const { images } = this.props;
        if (images) {
            let items = [];
            let colImg = [];
            let addCols = (k) =>{
                if(colImg.length>0){
                    items.push(<ColImage key={`col${k}`}>{colImg}</ColImage>);
                    colImg=[];
                }
            }
            images.forEach((image,i)=>{
                const {src,alt} = image;
                if (i%3===0) {
                    addCols(i);
                    items.push(<BigImg key={`img${i}`} src={src} alt={alt} />);
                    
                }else{
                    colImg.push( <SmallImg key={`img${i}`} src={src} alt={alt} />) 
                }
            });
            addCols(images.length);
            return items;
        }
        return [];
    }


    render() {
        const items = this.createGalleryItems();
        if(items){
            return (
                <WrapGallery>
                    {items}        
                </WrapGallery>
            );
        }
        return null;
    }
}

export default BoxGallery;