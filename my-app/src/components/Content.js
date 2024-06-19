import React, { Component } from 'react'
import css from './css/Content.module.css'
import Posts from '../posts.json'
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                posts: Posts.savedPosts,
                isLoaded: true
            })
        }, 500);
    }

    handleSearchChange = (event) => {
        const name = event.target.value.toLowerCase()

        const filteredPosts = Posts.savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        })

        this.setState({
            posts:filteredPosts
        });
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>

                    <form>
                        <label htmlFor="searchInput">Search: </label>
                        <input type="search" id="searchInput" onChange={this.handleSearchChange} />
                        <h4>Posts found:{this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {this.state.isLoaded ? <PostItem posts={this.state.posts} /> : <Loader />}
                </div>
            </div>
        )
    }
}

export default Content