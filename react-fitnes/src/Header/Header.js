import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

export default function Header() {
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [user, setUser])
    
    const logout = async () => {
        await signOut(auth);
    };
    return <header className="header">
    <div className="name">SKiF</div>
    <form>
        {user ? <button onClick={logout}  className="entry" type='button'>Выйти</button> : <Link to='/react-fitnes/auth'><button  className="entry">Войти</button></Link>}
    </form>
    </header>
}