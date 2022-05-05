import React from 'react';
import './FoodDiaryNutritionForm.css'


export default function FoodDiaryNutritionForm() {
    return <form action="/" method="post">
    <div className="block">
        <label className="food">Завтрак<input className="food_input" type="text"/></label>
        <button className="plus" type='button'></button>
    </div>
    <div className="block">
        <label className="food">Обед<input className="food_input" type="text"/></label>
        <button className="plus" type='button'></button>
    </div>
    <div className="block">
        <label className="food">Ужин<input className="food_input" type="text"/></label>
        <button className="plus" type='button'></button>
    </div>
</form>
}