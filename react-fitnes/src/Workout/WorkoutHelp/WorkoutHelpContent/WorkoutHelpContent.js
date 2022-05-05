import React, { useState } from 'react';
import './WorkoutHelpContent.css'
import WorkoutHelpContentExer from './WorkoutHelpContentExer';
import WorkoutHelpContentPrograms from './WorkoutHelpContentPrograms';
export default function WorkoutHelpContent() {

    const [showExercises, setShowExercises] = useState(false)

    const [showPrograms, setShowPrograms] = useState(false)
    function handleClickExercises () {
        setShowExercises(!showExercises)
    }

    

    function handleClickPrograms () {
        setShowPrograms(!showPrograms)
    }

    return  <div className="workout_help_block">
                    <div className="workout_help_head" onClick={handleClickExercises}>Упражнения</div>
                    <div className="workout_help_head" onClick={handleClickPrograms}>Программы</div>
                    <div className="workout_help_head">Личное</div>
                    {showExercises && <WorkoutHelpContentExer/>}
                    {showPrograms && <WorkoutHelpContentPrograms/>}
            </div>
}