import React, { useState, useEffect } from 'react';
import './Home.css'
import AddNewPost from './AddNewPost';
import initialState from '../Store/store';
import BlockNewPost from './BlockNewPost';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig';

export default function Home() {
    const [store, setStore] = useState(initialState)
    const [showAddpost, setShowAddPost] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [user, setUser])

    function handleAddPostActive () {
        setShowAddPost(true);
    }

    function handleAddPostInactive () {
        setShowAddPost(false);
    }
    
    function handleEscape(e) {
        if(e.key === 'Escape' && showAddpost) {
            handleAddPostInactive();
        }
    }

    useEffect (() => {
        window.addEventListener('keyup', handleEscape);
        return function cleanUp () {
            window.removeEventListener('keyup', handleEscape);
        }
    })
    
    function postImport () {
            setStore((prevStore) => {
                return {
                    ...prevStore,
                    allPosts: [
                        ...prevStore.allPosts,
                        {
                            id: store.allPosts.length + 1,
                            title: postTitle,
                            description: postDescription,  
                        }
                    ],
                }
            } )
    }


  return  <div className="home_page_main">
            <div className="home_page">
                <div className="home_page_avatar"></div>
                {user ? <div className="home_page_name">{user.displayName}</div> : <div className="home_page_name"></div>}
                <button onClick={handleAddPostActive} className="home_page_post">Новая запись</button>
            </div>
            {store.allPosts.map((post, index) => {
                        return <BlockNewPost postTitle={post.title} key={index} postDescription={post.description}/>
                })}
            {showAddpost && <AddNewPost 
                                store={store} 
                                handleAddPostInactive={handleAddPostInactive}
                                postTitle={postTitle}
                                setPostTitle={setPostTitle}
                                postDescription={postDescription}
                                setPostDescription={setPostDescription}
                                postImport={postImport}/>}
        </div>

}