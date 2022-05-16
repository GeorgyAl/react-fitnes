import React, { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import './CommonBlock.css'
import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
export default function CommonBlock() {
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    return <>
            <div className="firstBlock">
                {user ? <div className='avatar'></div> : null}
                {user ? <div className='avatar_name'>{user.email}</div> : <Link className='link_style' to='/auth'><button type="button" className="firstBlock_head_entry">Войти</button></Link>}
                <ul className="link_small_head">
                    <Link className='link_style' to='/home'> <li className="link_small">Моя страница</li></Link>
                    <Link className='link_style' to='/'><li className="link_small">Дневник питания</li></Link>
                    <Link className='link_style' to='/workout'><li className="link_small">Дневник тренировок</li></Link>
                    <Link className='link_style' to='/weight'><li className="link_small">Изменения веса</li></Link>
                    <li className="link_small">Статьи</li>
                </ul>
            </div>
        </>
}
