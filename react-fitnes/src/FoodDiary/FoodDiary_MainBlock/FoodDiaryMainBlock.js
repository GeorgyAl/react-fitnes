import React from 'react';
import './FoodDiaryMainBlock.css'
import FoodDiaryMainBlockData from './FoodDiaryMainBlockData.js'
import FoodDiaryNutrition from './FoodDiaryMainBlockNutrition/FoodDiaryNutrition';

export default function FoodDiaryMainBlock({ helpActiveClickLunch, helpActiveClickDinner, helpActiveClickBreakfast, setStore, store }) {
    return  <div className='secondBlock'>
        <FoodDiaryMainBlockData/>
        <FoodDiaryNutrition helpActiveClickLunch={helpActiveClickLunch} 
            helpActiveClickDinner={helpActiveClickDinner} 
            helpActiveClickBreakfast={helpActiveClickBreakfast}
            setStore={setStore}
            store={store}/>
    </div>
}