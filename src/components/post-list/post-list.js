import React from 'react';
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css';

const PostList = () => {
    return (
        <ul className="applist list-group">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </ul>
    )
}
export default PostList;