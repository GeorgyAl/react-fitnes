import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import './Registration.css'
import { auth } from '../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
export default function Registration() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerName, setRegisterName] = useState('');
    let navigate = useNavigate();
    const register = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            await updateProfile( user.user, {displayName: registerName})
            console.log(user);
            navigate('/react-fitnes/');
        } catch (error) {
            console.log(error.message);
        }
    }
  return   <>
                <main></main>
                <div className="registration">
                    <h1 className="regist_title">Регистрация</h1>
                    <form  onSubmit={register}>
                        <input  className="input_regist" 
                            type="text" 
                            placeholder="Ваше имя" 
                            name="login"
                            onChange={(event) => {setRegisterName(event.target.value)}}
                            required/>
                        <input className="input_regist" 
                            type="text" 
                            placeholder="Придумайте пароль" 
                            name="password"
                            onChange={(event) => {setRegisterPassword(event.target.value)}}
                            required/>
                        <input className="input_regist" 
                            type="text" 
                            placeholder="Email" 
                            name="email"
                            onChange={(event) => {setRegisterEmail(event.target.value)}}
                            required/>
                        <button className="btn_regist" type='submit'>Создать аккаунт</button>
                        <Link to='/react-fitnes/' className='link_btn'><button className="btn_regist" type='button'>На главную</button></Link>
                    </form>
                </div>
            </>
  

}