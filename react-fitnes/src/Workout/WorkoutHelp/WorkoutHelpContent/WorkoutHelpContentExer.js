import React, { useState} from 'react';
import './WorkoutHelpContentExer.css'
import WorkoutHelpContentExerItem from './WorkoutHelpContentExerItem';

const exercises = [
    {
        name: 'Жим лежа',
        gif: ''
    },
    {
        name: 'Становая тяга',
        gif: ''
    },
    {
        name: 'Жим хаммера',
        gif: ''
    },
    {
        name: 'Подтягивания',
        gif: ''
    },
    {
        name: 'Упражнение с гантелями - молоток',
        gif: ''
    },
    {
        name: 'Отжимания',
        gif: ''
    },
    {
        name: 'Скручивания',
        gif: ''
    }
]

export default function WorkoutHelpContentExer() {

    const [value, setValue] = useState('')

    const filteredExercises  = exercises.filter(exercise => {
        return exercise.name.toLowerCase().includes(value.toLowerCase())
    })

    
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
                                                               />
                        })}
                </ul>
            </div>
}
