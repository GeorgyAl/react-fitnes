import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { auth, db } from '../firebaseConfig';
import './AddNewPost.css'

export default function AddNewPost( { handleAddPostInactive, store, postTitle, postDescription, setPostTitle, setPostDescription, postImport }) {
    
    const postsCollectionRef = collection(db, 'posts');
    const createPosts = async () => {
        await addDoc (postsCollectionRef, {title: postTitle, postText: postDescription, author: {id: auth.currentUser.uid}}, )
    }
    
    function createPost(e) {
        e.preventDefault();
        createPosts()
        postImport();
        handleAddPostInactive();
    }

  return <>
            <form className='addPostForm' onSubmit={createPost}>
                <button onClick={handleAddPostInactive} className='closeButton'></button>
                <h2>Добавление поста</h2>
                <div>
                    <input className='addPostInput' 
                        type='text' 
                        name='postTitle' 
                        placeholder='Заголовок поста'
                        onChange={(event) => setPostTitle(event.target.value)}
                        required/>
                </div>
                <div>
                    <textarea className='addPostInput' 
                        name='postDescription' 
                        placeholder='Описание поста'
                        onChange={(event) => setPostDescription(event.target.value)}
                        required/>
                </div>
                <div>
                    <button className='blackBtn' type='submit'>Добавить пост</button>
                </div>
            </form>
            <div onClick={handleAddPostInactive} className='overlay'></div>
        </>

}