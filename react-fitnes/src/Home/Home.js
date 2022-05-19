import React, { useState, useEffect } from 'react';
import './Home.css'
import AddNewPost from './AddNewPost';
import initialState from '../Store/store';
import BlockNewPost from './BlockNewPost';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig';
import { db } from '../firebaseConfig';
import { getDocs, collection} from 'firebase/firestore'

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
        console.log(user)
    }, [user, setUser])

    const postsCollectionRef = collection(db, 'posts');

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

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs (postsCollectionRef);
            const posts = (data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log(posts[0].author.id)
            const postsUser = user?.uid  ? (posts.filter((post) => post.author.id === user.uid)) : [];
            console.log(postsUser)
            setStore((prevStore) => {
                return {
                    ...prevStore,
                    allPosts: postsUser,
                }
            })
        };
        getPosts();
    }, [user, setUser])
    
    function postImport () {
            setStore((prevStore) => {
                return {
                    ...prevStore,
                    allPosts: [
                        ...prevStore.allPosts,
                        {
                            id: store.allPosts.length + 1,
                            title: postTitle,
                            postText: postDescription,  
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
            {user ? store.allPosts.map((post, index) => {
                        return <BlockNewPost postTitle={post.title} key={index} postDescription={post.postText}/>
                }) : null}
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