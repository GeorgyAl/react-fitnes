import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import './CommonBlock.css'
import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
export default function CommonBlock() {
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [user, setUser])



    return <>
            <div className="firstBlock">
                {user ? <img className='avatar' alt='avatar' src={require('../CommonBlock/Icon/startIcon.jpg')}/> : null}
                {user ? <div className='avatar_name'>{user.displayName}</div>
                 : <Link className='link_style' to='/auth'><button type="button" className="firstBlock_head_entry">Войти</button></Link>}
                <ul className="link_small_head">
                    <Link className='link_style' to='/home'> <li className="link_small">Моя страница</li></Link>
                    <Link className='link_style' to='/'><li className="link_small">Дневник питания</li></Link>
                    <Link className='link_style' to='/workout'><li className="link_small">Дневник тренировок</li></Link>
                    <Link className='link_style' to='/weight'><li className="link_small">Изменения веса</li></Link>
                </ul>
            </div>
        </>
}
