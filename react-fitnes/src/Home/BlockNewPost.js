import React from 'react';
import './BlockNewPost.css'

export default function BlockNewPost( { postTitle, postDescription  }) {
  return <div className="home_page_post_new">
            <div className="home_page_post_head">{postTitle}</div>
            <div className="home_page_post_text">{postDescription}</div>
        </div>

}