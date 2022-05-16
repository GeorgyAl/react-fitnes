import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

export default function Header() {
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const logout = async () => {
        await signOut(auth);
    };
    return <header className="header">
    <div className="name">SKiF</div>
    <form>
        {user ? <button onClick={logout}  className="entry" type='button'>Выйти</button> : <Link to='/auth'><button  className="entry">Войти</button></Link>}
    </form>
    </header>
}