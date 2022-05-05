import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return <header className="header">
    <div className="name">SKiF</div>
    <form action="/" method="post">
        <Link to='/auth'><button  className="entry">Войти</button></Link>
    </form>
    </header>
}