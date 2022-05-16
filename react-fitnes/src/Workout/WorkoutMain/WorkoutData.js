import React, { useState } from 'react';
import './WorkoutData.css'
import initialState from '../../Store/store';
import WorkoutDataItem1 from './WorkOutDataItem1';
import WorkoutDataItem2 from './WorkoutDataItem2';
export default function WorkoutData() {
    const [store, setStore] = useState(initialState);
    const [triangleL, setTriangleL] = useState(false);
    const [triangleR, setTriangleR] = useState(true);
    function triangleRight () {
        setTriangleL(false);
        setTriangleR(true)
    }
    function triangleLeft () {
        setTriangleL(true);
        setTriangleR(false);
    }

    return  <div>
                <div className="data_target">Выберите дату</div>
                <div className="triangle-left" onClick={triangleLeft}></div>
                <ul className="data_block">
                {triangleR && <WorkoutDataItem1 
                                className="data" 
                                setStore={setStore} 
                                store={store}/>}
                {triangleL && <WorkoutDataItem2
                                className="data"
                                setStore={setStore}
                                store={store}/>
                }

                </ul>
                <div className="triangle-right" onClick={triangleRight}></div>
            </div>
}