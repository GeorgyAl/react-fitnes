import React from 'react';
import './FoodDiaryNutritionCalc.css'

export default function FoodDiaryNutritionCalc({ store }) {
    return  <div className="calculator">
                <h1 className="calculator_head">Калькулятор КБЖУ</h1>
                <form action="/" method="post" className="calculator_form">
                    <div className="food">
                        <div>Белки</div> 
                        <div className="calculator_input">{store.foodData.allSquirrelsBreakfast + store.foodData.allSquirrelsLunch + store.foodData.allSquirrelsDinner}</div>
                    </div>
                    <div className="food">
                        <div>Жиры</div> 
                        <div className="calculator_input">{store.foodData.allFatsBreakfast + store.foodData.allFatsLunch + store.foodData.allFatsDinner}</div>
                    </div>
                    <div className="food">
                        <div>Углеводы</div> 
                        <div className="calculator_input">{store.foodData.allCarbohydratesBreakfast + store.foodData.allCarbohydratesLunch + store.foodData.allCarbohydratesDinner}</div>
                    </div>
                    <div className="food">
                        <div>Всего каллорий</div> 
                        <div className="calculator_input">{store.foodData.allCalloryBreakfast + store.foodData.allCalloryLunch + store.foodData.allCalloryDinner}</div>
                    </div>
                    <button className="calculator_button">Сохранить</button>
                 </form>
            </div>
}