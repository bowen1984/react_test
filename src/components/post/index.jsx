import React from "react";

import Avatar from "components/avatar";
import Icon from "components/icon"
import Gallery from "components/box-gallery";

import { WrapPost, Head, Title, Description, Separator, Footer, Fill, Button, WrapGallery } from "./theme";

class Post extends React.Component {
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
                    <Button><Icon icon={"fire"} /></Button>
                    <Button><Icon icon={"paper"} /></Button>
                    <Button><Icon icon={"goccia"} /></Button>
                </Footer>
                <WrapGallery>
                    <Gallery images={gallery} />
                </WrapGallery>
            </WrapPost>
        );
    }
}

export default Post;