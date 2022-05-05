import React, { useState} from 'react';
import './NutritionHelpBlock.css'
import NutritionHelpBlockAll from './NutritionHelpBlockAll';
import NutritionHelpBlockPersonal from './NutritionHelpBlockPersonal';

export default function NutritionHelpBlock() {
    const [showAll, setShowAll] = useState(false)
    const [showPersonal, setShowPersonal] = useState(false)

    function handleClickAll () {
        setShowAll(!showAll)
        setShowPersonal(showPersonal)
    }

    function handleClickPerson () {
        setShowPersonal(!showPersonal)
        setShowAll(showAll)
    }

    return  <div className="nutrition_help_block">
                <form action='/' method='post'>
                    <button onClick={handleClickAll} type='button' className="nutrition_help_head">Все продукты</button>
                    <button onClick={handleClickPerson} type='button' className="nutrition_help_head">Личное</button>  
                </form>
                {showAll && <NutritionHelpBlockAll/>}
                {showPersonal && <NutritionHelpBlockPersonal/>}
            </div>
}