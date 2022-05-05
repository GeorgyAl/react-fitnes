import React from 'react';
import './WorkoutMainContent.css'

export default function WorkoutMainContent() {
    return <div className="workout">
                <ul className="workout_item_head">
                    <li className="workout_item">Добавить<br/>упражнение</li>
                    <li className="workout_item">Убрать<br/>упражнение</li>
                    <li className="workout_item">Создать<br/>тренировку</li>
                    <li className="workout_item">Добавить<br/>тренировку</li>
                    <li className="workout_item">Добавить<br/>программу</li>
                </ul>
                <div className="workout_main">
                    <div className="workout_main_first">
                        <img src='./gifs/work1.gif' alt="гифка"/>
                        <div className="working_text"><b>Становая тяга со штангой</b></div>
                        <div className="working_text">3 подхода 8-12 повторений</div>
                    </div>
                    <div className="workout_main_first">
                        <img src='./gifs/work1.gif' alt="гифка"/>
                        <div className="working_text"><b>Становая тяга со штангой</b></div>
                        <div className="working_text">3 подхода 8-12 повторений</div>
                    </div>
                    <div className="workout_main_first">
                        <img src='./gifs/work1.gif' alt="гифка"/>
                        <div className="working_text"><b>Становая тяга со штангой</b></div>
                        <div className="working_text">3 подхода 8-12 повторений</div>
                    </div>
                </div>
            </div>
}