import React, { useState } from 'react';
import './NutritionHelpBlockPersonalAdd.css'

export default function NutritionHelpBlockPersonalAdd({onClick}) {
    console.log(onClick, 'OnClick')

    const [name, setName] = useState('')
    const [squirrels, setSquirrels] = useState('')
    const [fats, setFats] = useState('')
    const [carbohydrates, setCarbohydrates] = useState('')
    const [callory, setCallory] = useState('')

    function handleClick () {
        onClick({
            name,
            squirrels,
            fats,
            carbohydrates,
            callory,
        }) 
        
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
                    <button onClick={handleClick} 
                        type="button" 
                        className="nutrition_personal_add_example_button">Сохранить
                    </button>
                </form>
            </div>
}