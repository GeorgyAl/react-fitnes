import React from 'react';
import './FoodDiaryNutritionCalc.css'

export default function FoodDiaryNutritionCalc({ store, selectData, setSelectData  }) {
    return  <div className="calculator">
                <h1 className="calculator_head">Калькулятор КБЖУ</h1>
                <form action="/" method="post" className="calculator_form">
                    <div className="food">
                        <div>Белки</div> 
                        <div className="calculator_input">{selectData ? store.foodCalc[selectData].allSquirrelsBreakfast + store.foodCalc[selectData].allSquirrelsLunch + store.foodCalc[selectData].allSquirrelsDinner : null}</div>
                    </div>
                    <div className="food">
                        <div>Жиры</div> 
                        <div className="calculator_input">{selectData ? store.foodCalc[selectData].allFatsBreakfast + store.foodCalc[selectData].allFatsLunch + store.foodCalc[selectData].allFatsDinner : null}</div>
                    </div>
                    <div className="food">
                        <div>Углеводы</div> 
                        <div className="calculator_input">{ selectData ? store.foodCalc[selectData].allCarbohydratesBreakfast + store.foodCalc[selectData].allCarbohydratesLunch + store.foodCalc[selectData].allCarbohydratesDinner : null}</div>
                    </div>
                    <div className="food">
                        <div>Всего каллорий</div> 
                        <div className="calculator_input">{selectData ? store.foodCalc[selectData].allCalloryBreakfast + store.foodCalc[selectData].allCalloryLunch + store.foodCalc[selectData].allCalloryDinner : null}</div>
                    </div>
                    <button className={selectData && (store.breakfastAllDays[selectData] || store.lunchAllDays[selectData] || store.dinnerAllDays[selectData]) ? "calculator_button" : "calculator_button_inactive" }>Сохранить</button>
                 </form>
            </div>
}