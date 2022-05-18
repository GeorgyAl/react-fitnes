import React from 'react';
import './WorkoutHelpContentExerItem.css'

export default function WorkoutHelpContentExerItem({name, gif, setStore, store, selectData }) {

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
    }

    function workoutInDayDataImport () {
        if(selectData) {
            setStore((prevStore) => {
                return {
                    ...prevStore,
                    WorkAllDays: {
                        ...prevStore.WorkAllDays,
                        [selectData]: [
                            ...prevStore.WorkAllDays[selectData],
                            {
                                name: name,
                                gif: gif,
                            }
                        ]
                    }
                }
            } )
        }
    }

    function workoutInDayDataImport2 () { 
        const WorkAllDays = store.WorkAllDays[selectData] ? { 
            ...store.WorkAllDays, 
            [selectData]: [ 
                ...store.WorkAllDays[selectData], 
                { 
                    name: name, 
                    gif: gif, 
                } 
            ] 
            } : { 
                ...store.WorkAllDays, 
                [selectData]: [ 
                    { 
                        name: name, 
                        gif: gif, 
                    } 
                ] 
            }; 
 
        if(selectData) { 
            setStore((prevStore) => { 
                return { 
                    ...prevStore, 
                    WorkAllDays: WorkAllDays 
                } 
            }) 
        } 
 
    }
    return <li onClick={workoutInDayDataImport2} className="exercises_element">{name}</li>
}