import React from 'react';
import './FoodDiaryHelpBlock.css'
import NutritionHelpBlock from './NutritionHelpBlock.js'

export default function FoodDiaryHelpBlock({ helpInactiveClick, setStore, store }) {

    return  <div className="help_block">
                <div className="help_block_head">
                    <form action="/" method="post">
                        <button onClick={helpInactiveClick} type="button" className="help_block_vector"></button>
                    </form>
                </div>
                <NutritionHelpBlock setStore={setStore} store={store}/>
            </div>
}