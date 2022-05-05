import React from 'react';
import './FoodDiaryNutrition.css'
import FoodDiaryNutritionForm from './FoodDIaryNutritionForm.js';
import FoodDiaryNutritionCalc from './FoodDiaryNutritionCalc.js'

export default function FoodDiaryNutrition() {
    return  <div className='nutrition'>
        <FoodDiaryNutritionForm />
        <FoodDiaryNutritionCalc/>
    </div>
}