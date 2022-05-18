import React, { useState } from 'react';
import './WorkoutData.css'
import initialState from '../../Store/store';
import WorkoutDataItem1 from './WorkOutDataItem1';
import WorkoutDataItem2 from './WorkoutDataItem2';
export default function WorkoutData({ selectData, setSelectData }) {
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
                <div className="data_target">{selectData ? '' : 'Выберите дату'}</div>
                <div className="triangle-left" onClick={triangleLeft}></div>
                <ul className="data_block">
                {triangleR && <WorkoutDataItem1 
                                className="data" 
                                setStore={setStore} 
                                store={store}
                                selectData={selectData}
                                setSelectData={setSelectData}/>}
                {triangleL && <WorkoutDataItem2
                                className="data"
                                setStore={setStore}
                                store={store}
                                selectData={selectData}
                                setSelectData={setSelectData}/>
                }
                </ul>
                <div className="triangle-right" onClick={triangleRight}></div>
            </div>
}