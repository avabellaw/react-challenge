import React, { Component } from 'react'
import css from '../css/Content.module.css'
import {savedPosts} from '../../posts.json'
import PostItem from './PostItem';

export class Content extends Component {
    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                </div>
                <div className={css.SearchResults}>
                    <PostItem posts={savedPosts}/>
                </div>
            </div>
        )
    }
}

export default Content