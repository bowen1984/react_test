import React from "react";
import PropTypes from "prop-types"

import Post from "components/post";

class ListPost extends React.Component {

    static propTypes = {
        posts: PropTypes.array
    };

    render() {
        const { posts } = this.props;
        if (posts) {
            return (
                <div>
                    {posts.map((post, i) => {
                        return <Post key={`post${i}`} post={post} />
                    })}
                </div>
            );
        }
        return null;
    }
}

export default ListPost;