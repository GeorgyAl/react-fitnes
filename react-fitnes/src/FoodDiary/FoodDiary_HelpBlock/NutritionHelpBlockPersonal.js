import React, {useState} from 'react';
import './NutritionHelpBlockPersonal.css'
import NutritionHelpBlockPersonalAdd from './NutritionHelpBlockPersonalAdd';
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
]

export default function NutritionHelpBlockPersonal() {

    const [show, setShow] = useState(false)

    function handleClick () {
        setShow(!show)
    }

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
                <form action="/" method="post">
                    <button onClick={handleClick} type="button" className="nutrition_personal_add">Добавить продукт</button>
                </form>
                {show && <NutritionHelpBlockPersonalAdd/>}

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