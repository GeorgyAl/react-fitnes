import React from 'react';
import './WorkoutHelpContentExerItem.css'

export default function WorkoutHelpContentExerItem({name, gif, setStore, store }) {

    function workoutInDayImport () {
        setStore((prevStore) => {
            return {
                ...prevStore,
                WorkInDay: [
                    ...prevStore.WorkInDay,
                    {
                        name: name,
                        gif: gif,  
                    }
                ]
            }
        } )
        /* Сохранение данных на сервере - добавление упражнения*/
    }

    function workoutInDayDataImport () {
        console.log(store);
        for( let i = 0; i < 7; i++) {
            if(store.days1[i].position === true) {
                setStore((prevStore) => {
                    return {
                        ...prevStore,
                        days1: [
                            ...prevStore.days1,
                            store.days1[i].WorkInDay, [
                                ...prevStore.WorkInDay,
                                {
                                    name: name,
                                    gif: gif,
                                },
                            ]
                        ]
                    }
                } )
            }
        }
        
    }

    return <li onClick={workoutInDayImport} className="exercises_element">{name}</li>
}