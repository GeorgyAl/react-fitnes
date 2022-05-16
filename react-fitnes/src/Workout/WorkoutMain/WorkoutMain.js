import React from 'react';
import './WorkoutMain.css'
import WorkoutData from './WorkoutData.js'
import WorkoutMainContent from './WorkoutMainContent';

export default function WorkoutMain({ helpActiveClick, store, setStore }) {
    return  <div className='secondBlock_Workout'>
        <WorkoutData/>
        <WorkoutMainContent helpActiveClick={helpActiveClick} store={store} setStore={setStore}/>
    </div>
}