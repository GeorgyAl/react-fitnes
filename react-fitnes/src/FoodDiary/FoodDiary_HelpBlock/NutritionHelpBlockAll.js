import React, { useState} from 'react';
import './NutritionHelpBlockAll.css'
import NutritionHelpBlockAllItem from './NutritionHelpBlockAllItem';

const foods = [
    {
        name: 'Гречка',
        squirrels: '10',
        fats: '5',
        carbohydrates: '30',
        callory: '450'
    },
    {
        name: 'Яйцо куринное',
        squirrels: '15',
        fats: '15',
        carbohydrates: '4',
        callory: '130'
    },
    {
        name: 'Грудка',
        squirrels: '25',
        fats: '5',
        carbohydrates: '10',
        callory: '350'
    },
    {
        name: 'Капуста',
        squirrels: '5',
        fats: '2',
        carbohydrates: '12',
        callory: '100'
    },
    {
        name: 'Свинина',
        squirrels: '15',
        fats: '15',
        carbohydrates: '4',
        callory: '380'
    },
    {
        name: 'Морковь',
        squirrels: '7',
        fats: '5',
        carbohydrates: '18',
        callory: '88'
    },
    {
        name: 'Печенье',
        squirrels: '5',
        fats: '9',
        carbohydrates: '50',
        callory: '560'
    }
]

export default function NutritionHelpBlockAll() {

    const [value, setValue] = useState('')

    const filteredFood  = foods.filter(food => {
        return food.name.toLowerCase().includes(value.toLowerCase())
    })

    return <div className="nutrition_all">
                <form action="/" method="post">
                    <input className="nutrition_main_input" 
                           type="text" 
                           placeholder="Название продуктов"
                           onChange={(event) => setValue(event.target.value)}/>
                </form>
                <ul className="nutrition_block">
                    {filteredFood.map((food, index) => {
                        return <NutritionHelpBlockAllItem key={index} 
                                                        name={food.name}
                                                        squirrels={food.squirrels}
                                                        fats={food.fats}
                                                        carbohydrates={food.carbohydrates}/>
                    })}
                </ul>
            </div>
}
