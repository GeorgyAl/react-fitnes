import React from 'react';
import './FoodDiaryNutrition.css'
import FoodDiaryNutritionForm from './FoodDIaryNutritionForm.js';
import FoodDiaryNutritionCalc from './FoodDiaryNutritionCalc.js'

export default function FoodDiaryNutrition({ helpActiveClickLunch, helpActiveClickDinner, helpActiveClickBreakfast, setStore, store, selectData, setSelectData }) {
    return  <div className='nutrition'>
        <FoodDiaryNutritionForm helpActiveClickLunch={helpActiveClickLunch} 
            helpActiveClickDinner={helpActiveClickDinner} 
            helpActiveClickBreakfast={helpActiveClickBreakfast}
            setStore={setStore}
            store={store}
            selectData={selectData}
            setSelectData={setSelectData}/>
        <FoodDiaryNutritionCalc
            store={store}
            selectData={selectData}
            setSelectData={setSelectData}/>
    </div>
}