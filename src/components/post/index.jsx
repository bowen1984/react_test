import React from "react";
import PropTypes from "prop-types";

import Avatar from "components/avatar";
import Icon from "components/icon"
import Gallery from "components/box-gallery";

import { WrapPost, Head, Title, Description, Separator, Footer, Fill, Button, WrapGallery } from "./theme";

class Post extends React.Component {

    static propTypes = {
        post: PropTypes.shape({
            head: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            author: PropTypes.object,
            gallery: PropTypes.array
        })
    };

    render() {
        const { post } = this.props;
        const { head, title, description, author, gallery } = post;
        return (
            <WrapPost>
                {head && <Head>{head}</Head>}
                {title && <Title>{title}</Title>}
                {description && <Description>{description}</Description>}
                <Separator />
                <Footer>
                    {author && <Avatar info={author} />}
                    <Fill />
                    <Button><Icon icon={"fire"} alt="fire" /></Button>
                    <Button><Icon icon={"paper"} alt="paper" /></Button>
                    <Button><Icon icon={"goccia"} alt="goccia" /></Button>
                </Footer>
                <WrapGallery>
                    <Gallery images={gallery} />
                </WrapGallery>
            </WrapPost>
        );
    }
}

export default Post;