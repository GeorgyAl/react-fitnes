import React from 'react';
import './WorkoutMain.css'
import WorkoutData from './WorkoutData.js'
import WorkoutMainContent from './WorkoutMainContent';

export default function WorkoutMain({ helpActiveClick, store, setStore, selectData, setSelectData}) {
    
    return  <div className='secondBlock_Workout'>
        <WorkoutData selectData={selectData} setSelectData={setSelectData}/>
        <WorkoutMainContent helpActiveClick={helpActiveClick} store={store} setStore={setStore} selectData={selectData} setSelectData={setSelectData} />
    </div>
}