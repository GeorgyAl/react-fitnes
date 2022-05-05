import React from 'react';
import './WorkoutMain.css'
import WorkoutData from './WorkoutData.js'
import WorkoutMainContent from './WorkoutMainContent';

export default function WorkoutMain() {
    return  <div className='secondBlock'>
        <WorkoutData/>
        <WorkoutMainContent/>
    </div>
}