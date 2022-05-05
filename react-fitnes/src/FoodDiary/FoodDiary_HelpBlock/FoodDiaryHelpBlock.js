import React, { useState} from 'react';
import './FoodDiaryHelpBlock.css'
import NutritionHelpBlock from './NutritionHelpBlock.js'

export default function FoodDiaryHelpBlock() {

    const [show, setShow] = useState(false)

    function handleClick () {
        setShow(!show)
    }

    return  <div className="help_block">
                <div className="help_block_head">
                    <form action="/" method="post">
                        <button onClick={handleClick} type="button" className="help_block_vector"></button>
                    </form>
                </div>
                <NutritionHelpBlock/>
            </div>
}