import React from 'react'
import './CommonBlock.css'
import { Link } from 'react-router-dom'

export default function CommonBlock() {
    return <>
            <div className="firstBlock">
            <Link className='link_style' to='/auth'><button type="button" className="firstBlock_head_entry">Войти</button></Link>
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
