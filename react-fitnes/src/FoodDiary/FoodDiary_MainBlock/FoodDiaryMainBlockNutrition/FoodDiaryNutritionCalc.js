import React from 'react';
import './FoodDiaryNutritionCalc.css'

export default function FoodDiaryNutritionCalc() {
    return  <div className="calculator">
                <h1 className="calculator_head">Калькулятор КБЖУ</h1>
                <form action="/" method="post" className="calculator_form">
                    <label className="food">Белки<input className="calculator_input" type="text"/></label>
                    <label className="food">Жиры<input className="calculator_input" type="text"/></label>
                    <label className="food">Углеводы<input className="calculator_input" type="text"/></label>
                    <label className="food">Всего каллорий<input className="calculator_input_callor" type="text"/></label>
                    <button className="calculator_button">Сохранить</button>
                 </form>
            </div>
}