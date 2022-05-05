import React, { useState } from 'react';
import './NutritionHelpBlockPersonalAdd.css'

export default function NutritionHelpBlockPersonalAdd() {
    const foods = [
        {
            name: 'Гречка',
            squirrels: '10',
            fats: '5',
            carbohydrates: '30',
            callory: '450'
        },
    ]

    const [name, setName] = useState('')
    const [squirrels, setSquirrels] = useState('')
    const [fats, setFats] = useState('')
    const [carbohydrates, setCarbohydrates] = useState('')
    const [callory, setCallory] = useState('')

    function foodPush () {
        let food = {};
        food.name = name;
        food.squirrels = squirrels;
        food.fats = fats;
        food.carbohydrates = carbohydrates;
        food.callory = callory;
        foods.push(food)
        console.log(foods)
        return foods;
    }

    return  <div className="nutrition_personal_add_example">
                <form action="/" method="post">
                    <label className="nutrition_personal_add_example_name">Название<input className="nutrition_personal_add_example_input" 
                                                                                          type="text"
                                                                                          onChange={(event) => setName(event.target.value)}/></label>
                    <label className="nutrition_personal_add_example_name">Белки<input className="nutrition_personal_add_example_input" 
                                                                                       type="text"
                                                                                       onChange={(event) => setSquirrels(event.target.value)}/></label>
                    <label className="nutrition_personal_add_example_name">Жиры<input className="nutrition_personal_add_example_input"
                                                                                      type="text"
                                                                                      onChange={(event) => setFats(event.target.value)}/></label>
                    <label className="nutrition_personal_add_example_name">Углеводы<input className="nutrition_personal_add_example_input"
                                                                                          type="text"
                                                                                          onChange={(event) => setCarbohydrates(event.target.value)}/></label>
                    <label className="nutrition_personal_add_example_name">Каллорий<input className="nutrition_personal_add_example_input"
                                                                                          type="text"
                                                                                          onChange={(event) => setCallory(event.target.value)}/></label>
                    <button onClick={foodPush} 
                            type="button" 
                            className="nutrition_personal_add_example_button">Сохранить
                    </button>
                </form>
            </div>
}