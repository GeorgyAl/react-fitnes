import React, { useState, useEffect } from 'react';
import './WorkoutHelpContentExer.css'
import WorkoutHelpContentExerItem from './WorkoutHelpContentExerItem';
import { db } from  '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

export default function WorkoutHelpContentExer({ setStore, store, selectData, setSelectData }) {

    const [value, setValue] = useState('')
    const [exercises, setExercise] = useState([]);
    const exercisesCollectionRef = collection(db, "exercise")

    useEffect(() => {
        const getExercise = async () => {
            const data = await getDocs(exercisesCollectionRef);
            setExercise(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getExercise();
    }, [])

    const filteredExercises  = exercises.filter(exercise => {
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
                                        store={store}
                                        selectData={selectData}
                                        setSelectData={setSelectData}/>
                        })}
                </ul>
            </div>
}
