import React from 'react';
import './WeightControlMain.css'
import WeightContolGraf from './WeightControlGraf';

export default function WeightContolMain() {
  return <div className='secondblock'>
            <div className="track">
                <form action="/" method="post">
                    <label className="track_main_head">Текущий вес<input className="track_input_head" type="text"/></label>
                    <label className="track_main_old">Начальный вес<input className="track_input" type="text"/></label>
                    <label className="track_main_welcome">Желанный вес<input className="track_input" type="text"/></label>
                    <button className="track_button">Сохранить</button>
                </form>
                <WeightContolGraf/>
            </div>
        </div>


}