import React from 'react';
import './WorkoutMainContentItem.css'

export default function WorkoutMainContentItem({ name, gif, removeItem }) {

    return <div className="workout_main_first">
                <img src={require(`./gifs/${gif}.gif`)} alt="гифка"/>
                <div className='workout_exit' onClick={removeItem}></div>
                <div className="working_text"><b>{name}</b></div>
                <div className="working_text">3 подхода 8-12 повторений</div>
            </div>
}