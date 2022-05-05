import React from 'react';
import './NutritionHelpBlockAllItem.css'

export default function NutritionHelpBlockAllItem({name, squirrels, fats, carbohydrates }) {
    return  <li className="nutrition_element">
                <div>{name}</div>
                <div>Белки - {squirrels + "гр"} Жиры - {fats + "гр"} Углеводы  - {carbohydrates + "гр"}</div>
                <div>
                    <form action="/" method="post">
                        <label  className="nutrition_label" for="nutrition_input_main">Вес(гр.)</label>
                        <input className="nutrition_input" type="text" id="nutrition_input_main"/>
                    </form>
                </div>
            </li>
}