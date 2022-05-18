import React from 'react';
import './WorkoutMainContent.css'
import WorkoutMainContentItem from './WorkoutMainContentItem';

export default function WorkoutMainContent({ helpActiveClick, store, setStore, selectData, setSelectData}) {

    return <div className="workout">
                <ul className="workout_item_head">
                    <li className="workout_item" onClick={helpActiveClick}>Добавить<br/>упражнение</li>
                    <li className="workout_item">Создать<br/>тренировку</li>
                    <li className="workout_item">Добавить<br/>тренировку</li>
                    <li className="workout_item">Добавить<br/>программу</li>
                </ul>
                <div className="workout_main">
                    {selectData && store.WorkAllDays[selectData] ? store.WorkAllDays[selectData].map((exercise, index) => {
                        return <WorkoutMainContentItem key={index}
                                    name={exercise.name}
                                    gif={exercise.gif}
                                    position={index}
                                    setStore={setStore}
                                    store={store}
                                    selectData={selectData}/>
                    }) : null}
                </div>
                <button className={selectData && store.WorkAllDays[selectData] ? "calculator_button" : "calculator_button_inactive" }>Сохранить</button>
            </div>
}