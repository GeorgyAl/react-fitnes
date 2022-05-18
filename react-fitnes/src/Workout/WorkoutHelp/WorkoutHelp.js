import React from 'react';
import './WorkoutHelp.css'
import WorkoutHelpContent from './WorkoutHelpContent/WorkoutHelpContent';

export default function WorkoutHelp({ helpInactiveClick, setStore, selectData, setSelectData, store }) {
    return  <div className="help_block">
                <div className="help_block_head">
                    <form action="/" method="post">
                        <button onClick={helpInactiveClick} type="button" className="help_block_vector"></button>
                    </form>
                </div>
                <WorkoutHelpContent setStore={setStore} selectData={selectData} setSelectData={setSelectData} store={store}/>
            </div>
}