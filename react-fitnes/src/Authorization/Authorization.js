import React, { useState } from 'react';
import './Authorization.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom'

export default function Authorization() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    let navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
            navigate('/home');
        } catch (error) {
            console.log(error.message);
        }
    }
  return   <>
                <main></main>
                <div className="authorization">
                    <h1 className="auth_title">Авторизация</h1>
                    <form onSubmit={login}>
                            <input  className="input" 
                                type="text" 
                                placeholder="Введите email" 
                                name="login"
                                onChange={(event) => {setLoginEmail(event.target.value)}}
                                required/>
                            <input className="input" 
                                type="text" 
                                placeholder="Введите пароль" 
                                name="password"
                                onChange={(event) => {setLoginPassword(event.target.value)}}
                                required/>
                           <button className="btn" type='submit'>Войти</button>
                    </form>
                    <Link to='/registration' className='link_btn'><button className="btn" type='button'>Регистрация</button></Link>
                    <Link to='/' className='link_btn'><button className="btn" type='button'>На главную</button></Link>
                </div>
            </>
  

}