import React, {useState} from 'react';
import './NutritionHelpBlockPersonal.css'
import NutritionHelpBlockPersonalAdd from './NutritionHelpBlockPersonalAdd';
import NutritionHelpBlockAllItem from './NutritionHelpBlockAllItem';


export default function NutritionHelpBlockPersonal({foods, onUpdateFoods, setStore, store}) {
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
                    <button onClick={handleClick} type="button" className={show ? "nutrition_personal_exit" : "nutrition_personal_add"}>{show ? 'Закрыть' : 'Добавить продукт'}</button>
                </form>
                {show && <NutritionHelpBlockPersonalAdd onClick={onUpdateFoods}/>}

                <ul className="nutrition_block">
                    {filteredFood.map((food, index) => {
                        return <NutritionHelpBlockAllItem key={index} 
                                                        name={food.name}
                                                        squirrels={food.squirrels}
                                                        fats={food.fats}
                                                        carbohydrates={food.carbohydrates}
                                                        callory={food.callory}
                                                        setStore={setStore}
                                                        store={store}/>
                    })}
                </ul>
            </div>
}