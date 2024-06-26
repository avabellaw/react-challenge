import React from 'react'
import css from './css/Content.module.css'

function PostItem(props) {
    return (
        <div>
            {
                props.posts.map(post => {
                    const {name, title, desc, image} = post;
                    
                    return (
                        <div key={title} className={css.SearchItem}>
                            <p>{title}</p>
                            <p>{name}</p>
                            <img src={image} alt="" />
                            <p>{desc}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostItem