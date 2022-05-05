import React from 'react';
import './FoodDiaryMainBlock.css'
import FoodDiaryMainBlockData from './FoodDiaryMainBlockData.js'
import FoodDiaryNutrition from './FoodDiaryMainBlockNutrition/FoodDiaryNutrition';

export default function FoodDiaryMainBlock() {
    return  <div className='secondBlock'>
        <FoodDiaryMainBlockData/>
        <FoodDiaryNutrition/>
    </div>
}