import React, { useEffect, useState } from 'react';
import './BlockNewPost.css'
import { db } from '../firebaseConfig';
import {getDocs, collection} from 'firebase/firestore'

export default function BlockNewPost( { postTitle, postDescription  }) {
  const postsCollectionRef = collection(db, 'posts');
  const [postSee, setPostSee] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs (postsCollectionRef);
      setPostSee(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getPosts();
  })

  return <>
            { postSee.map((post, index) => {
              return <div className="home_page_post_new" key={index}>
                        <div className="home_page_post_head">{post.title}</div>
                        <div className="home_page_post_text">{post.postText}</div>
                    </div>
            })}
        </>

}