import React from 'react';
import './Authorization.css'
import { Link } from 'react-router-dom'

export default function Authorization() {
  return   <>
                <main></main>
                <div className="authorization">
                    <h1 className="auth_title">Авторизация</h1>
                    <form action="/" method="post">
                            <input  className="input" type="text" placeholder="Введите логин" name="login"/>
                            <input className="input" type="text" placeholder="Введите пароль" name="password"/>
                            <button className="btn" type='button'>Войти</button>
                            <Link to='/registration' className='link_btn'><button className="btn" type='button'>Регистрация</button></Link>
                    </form>
                </div>
            </>
  

}