import React from 'react';
import './WorkoutHelp.css'
import WorkoutHelpContent from './WorkoutHelpContent/WorkoutHelpContent';

export default function WorkoutHelp() {
    return  <div className="help_block">
                <div className="help_block_head">
                    <form action="/" method="post">
                        <button type="button" className="help_block_vector"></button>
                    </form>
                </div>
                <WorkoutHelpContent/>
            </div>
}