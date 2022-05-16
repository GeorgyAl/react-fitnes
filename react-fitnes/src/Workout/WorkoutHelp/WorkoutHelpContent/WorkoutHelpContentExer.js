import React, { useState, useEffect } from 'react';
import './WorkoutHelpContentExer.css'
import WorkoutHelpContentExerItem from './WorkoutHelpContentExerItem';

const exercisesMock = [
    {
        name: 'Жим лежа',
        gif: 'work3'
    },
    {
        name: 'Тяга грифа в наклоне',
        gif: 'work1'
    },
    {
        name: 'Жим гантелей лежа',
        gif: 'work6'
    },
    {
        name: 'Отжимания на брусьях',
        gif: 'work5'
    },
    {
        name: 'Вертикальная тяга',
        gif: 'work4'
    },
    {
        name: 'Бицепс c грифом',
        gif: 'work7'
    },
    {
        name: 'Скручивания',
        gif: 'work2'
    }
]

export default function WorkoutHelpContentExer({ setStore, store }) {

    const [value, setValue] = useState('')
    const [exercises, setExercise] = useState([]);

    const filteredExercises  = exercisesMock.filter(exercise => {
        return exercise.name.toLowerCase().includes(value.toLowerCase())
    })

    /*useEffect(() => {
        Promise.resolve().then(() => {
            setExercise(exercisesMock)
        })
    }, [])*/
    return <div className="exercises">
                <form action="/" method="post">
                    <input className="exercises_input" 
                        type="text" 
                        placeholder="Название упражнения"
                        onChange={(event) => setValue(event.target.value)}/>
                </form>
                <ul className="exercises_block">
                {filteredExercises.map((exercise, index) => {
                            return <WorkoutHelpContentExerItem key={index} 
                                                               name={exercise.name}
                                                               gif={exercise.gif}
                                                               setStore={setStore}
                                                               store={store}/>
                        })}
                </ul>
            </div>
}
