import React, { useState} from 'react';
import './NutritionHelpBlock.css'
import NutritionHelpBlockAll from './NutritionHelpBlockAll';
import NutritionHelpBlockPersonal from './NutritionHelpBlockPersonal';

export default function NutritionHelpBlock({ setStore, store }) {
    const [foods, setFoods] = useState([
        {
            name: 'Творог',
            squirrels: '10',
            fats: '5',
            carbohydrates: '30',
            callory: '450'
        },
    ])
    function onUpdateFoods (food) {
        setFoods(prevFoods => prevFoods.concat(food))
    }
    const [allActive, setAllactive] = useState(true);
    const [personActive, setPersonActive] = useState(false);

    function personlActiveClick () {
        setAllactive(false);
        setPersonActive(true);
    }
    
    function allActiveClick () {
        setAllactive(true);
        setPersonActive(false);
    }

    return  <div className="nutrition_help_block">
                <form action='/' method='post'>
                    <button onClick={allActiveClick} type='button' className="nutrition_help_head">Все продукты</button>
                    <button onClick={personlActiveClick} type='button' className="nutrition_help_head">Личное</button>  
                </form>
                {allActive && <NutritionHelpBlockAll setStore={setStore} store={store}/>}
                {personActive && <NutritionHelpBlockPersonal setStore={setStore} store={store} onUpdateFoods={onUpdateFoods} foods={foods} />}
            </div>
}