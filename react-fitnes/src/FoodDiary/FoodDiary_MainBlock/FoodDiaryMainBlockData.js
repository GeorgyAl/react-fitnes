import React, { useState } from 'react';
import './FoodDiaryMainBlockData.css'
import initialState from '../../Store/store';
import FoodDiaryMainBlockData1 from './FoodDiaryMainBlockData1';
import FoodDiaryMainBlockData2 from './FoodDiaryMainBlockData2';
export default function FoodDiaryMainBlockData({ selectData, setSelectData }) {
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
                {triangleR && <FoodDiaryMainBlockData1 
                                className="data" 
                                setStore={setStore} 
                                store={store}
                                selectData={selectData}
                                setSelectData={setSelectData}/>}
                {triangleL && <FoodDiaryMainBlockData2
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