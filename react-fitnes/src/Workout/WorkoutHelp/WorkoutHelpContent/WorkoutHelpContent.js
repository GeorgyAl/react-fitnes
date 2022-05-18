import React, { useState } from 'react';
import './WorkoutHelpContent.css'
import WorkoutHelpContentExer from './WorkoutHelpContentExer';
import WorkoutHelpContentPrograms from './WorkoutHelpContentPrograms';
export default function WorkoutHelpContent({setStore, store, selectData, setSelectData}) {
    const [showExercises, setShowExercises] = useState(true);
    const [showPrograms, setShowPrograms] = useState(false);

    function showProgramsClick () {
        setShowExercises(false);
        setShowPrograms(true);
    }
    
    function showExercisesClick () {
        setShowPrograms(false);
        setShowExercises(true);
    }

    return  <div className="workout_help_block">
                    <div className="workout_help_head" onClick={showExercisesClick}>Упражнения</div>
                    <div className="workout_help_head" onClick={showProgramsClick}>Программы</div>
                    <div className="workout_help_head">Личное</div>
                    {showExercises && <WorkoutHelpContentExer setStore={setStore} store={store} selectData={selectData} setSelectData={setSelectData}/>}
                    {showPrograms && <WorkoutHelpContentPrograms/>}
            </div>
}