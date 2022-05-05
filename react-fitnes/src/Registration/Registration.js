import React from 'react';
import './Registration.css'

export default function Registration() {
  return   <>
                <main></main>
                <div className="registration">
                    <h1 className="regist_title">Регистрация</h1>
                    <form action="/" method="post">
                        <input  className="input_regist" type="text" placeholder="Придумайте логин" name="login"/>
                        <input className="input_regist" type="text" placeholder="Придумайте пароль" name="password"/>
                        <input className="input_regist" type="text" placeholder="Повторите пароль" name="password"/>
                        <input className="input_regist" type="text" placeholder="Email" name="email"/>
                        <button className="btn_regist" type='button'>Создать аккаунт</button>
                    </form>
                </div>
            </>
  

}