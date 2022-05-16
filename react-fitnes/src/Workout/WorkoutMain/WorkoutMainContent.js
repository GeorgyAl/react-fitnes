import React from 'react';
import './WorkoutMainContent.css'
import WorkoutMainContentItem from './WorkoutMainContentItem';

export default function WorkoutMainContent({ helpActiveClick, store, setStore }) {
    const removeItem = pos => {
        const temp = [...store.WorkInDay];
        console.log(temp)
        temp.splice(pos, 1);
        console.log(store.WorkInDay, "Нажатие на кнопку удаления")
        setStore((prevStore) => {
            return {
                ...prevStore,
                WorkInDay: temp,
            }            
        })
    }
    return <div className="workout">
                <ul className="workout_item_head">
                    <li className="workout_item" onClick={helpActiveClick}>Добавить<br/>упражнение</li>
                    <li className="workout_item">Создать<br/>тренировку</li>
                    <li className="workout_item">Добавить<br/>тренировку</li>
                    <li className="workout_item">Добавить<br/>программу</li>
                </ul>
                <div className="workout_main">
                    {store.WorkInDay.map((exercise, index) => {
                        return <WorkoutMainContentItem key={index}
                                    name={exercise.name}
                                    gif={exercise.gif}
                                    removeItem={removeItem}/>
                    })}
                </div>
                <button className="calculator_button">Сохранить</button>
            </div>
}