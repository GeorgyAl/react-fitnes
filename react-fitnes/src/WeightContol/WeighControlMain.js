import React, { useState } from 'react';
import './WeightControlMain.css'
import WeightContolGraf from './WeightControlGraf'
import initialState from '../Store/store'

export default function WeightContolMain() {
    const [store, setStore] = useState(initialState)
    const [weightStart, setWeightStart] = useState('');
    const [weightNow, setWeightNow] = useState('');
    const [weightTarget, setWeightTarget] = useState('');

    function weightImport(e) {
        e.preventDefault();
        let today = new Date();
        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth() + 1).padStart(2, '0'); 
        setStore((prevStore) => {
            return {
                ...prevStore,
                weightControl: [
                    ...prevStore.weightControl,
                    {
                        data: day + '.' + month,
                        weightStart: weightStart,
                        weightNow: weightNow, 
                        weightTarget: weightTarget,
                    }
                ],
            }
        })
        console.log(store.weightControl);
    }

  return <div className='secondblock'>
            <div className="track">
                <form  onSubmit={weightImport}>
                    <label className="track_main_head">Текущий вес<input onChange={(event) => {setWeightNow(event.target.value)}} className="track_input_head" type="text" required/></label>
                    <label className="track_main_old">Начальный вес<input onChange={(event) => {setWeightStart(event.target.value)}} className="track_input" type="text" required/></label>
                    <label className="track_main_welcome">Желанный вес<input onChange={(event) => {setWeightTarget(event.target.value)}} className="track_input" type="text" required/></label>
                    <button className="track_button" type='submit'>Сохранить</button>
                </form>
                <WeightContolGraf store={store}/>
            </div>
        </div>


}