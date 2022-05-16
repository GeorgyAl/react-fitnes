import React, { useState } from 'react';
import './FoodDiaryMainBlockData.css'
import initialState from '../../Store/store';

export default function FoodDiaryMainBlockData() {
    const [store, setStore] = useState(initialState);
    const [triangle, setTriangle] = useState(false);
    function triangleRight () {
        setTriangle(false);
    }
    function triangleLeft () {
        setTriangle(true);
    }
    return  <div>
                <div className="data_target">Выберите дату</div>
                <div className="triangle-left" onClick={triangleLeft}></div>
                <ul className="data_block">
                {triangle ? store.days2.map((pos, index) => {
                        return <li className="data" key={index}>{pos.day}</li>
                    }) : store.days1.map((pos, index) => {
                        return <li className="data" key={index}>{pos.day}</li>
                    })}
                    
                </ul>
                <div className="triangle-right" onClick={triangleRight}></div>
            </div>
}