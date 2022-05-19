import React, { useState } from 'react';
import './NutritionHelpBlockPersonalAdd.css'
import { db, auth } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
export default function NutritionHelpBlockPersonalAdd({ onUpdateFoods, setStore, store }) {
    console.log(onUpdateFoods, 'OnClick')

    const [name, setName] = useState('')
    const [squirrels, setSquirrels] = useState('')
    const [fats, setFats] = useState('')
    const [carbohydrates, setCarbohydrates] = useState('')
    const [callory, setCallory] = useState('')

    const foodsPersonalCollectionRef = collection(db, 'foodsPersonal');
    const createFoodPersonal = async () => {
        await addDoc (foodsPersonalCollectionRef, {
            name,
            squirrels,
            fats,
            carbohydrates,
            callory,
            author: {id: auth.currentUser.uid}
        }, )
    }

    function foodPersonalImport () {
        setStore((prevStore) => {
            return {
                ...prevStore,
                foodPersonal: [
                    ...prevStore.foodPersonal,
                    {
                        name,
                        squirrels,
                        fats,
                        carbohydrates,
                        callory,
                    }
                ],
            }
        } )
}
    function handleClick () {
        createFoodPersonal();
        foodPersonalImport();
    }



    return  <div className="nutrition_personal_add_example">
                <form action="/" method="post">
                    <label className="nutrition_personal_add_example_name">Название<input className="nutrition_personal_add_example_input" 
                                                                                          type="text"
                                                                                          onChange={(event) => setName(event.target.value)}/></label>
                    <label className="nutrition_personal_add_example_name">Белки<input className="nutrition_personal_add_example_input" 
                                                                                       type="text"
                        onChange={(event) => setSquirrels(event.target.value)}/></label>
                    <label className="nutrition_personal_add_example_name">Жиры<input className="nutrition_personal_add_example_input"
                        type="text"
                        onChange={(event) => setFats(event.target.value)}/></label>
                    <label className="nutrition_personal_add_example_name">Углеводы<input className="nutrition_personal_add_example_input"
                        type="text"
                        onChange={(event) => setCarbohydrates(event.target.value)}/></label>
                    <label className="nutrition_personal_add_example_name">Каллорий<input className="nutrition_personal_add_example_input"
                        type="text"
                        onChange={(event) => setCallory(event.target.value)}/></label>
                    <button onClick={handleClick} 
                        type="button" 
                        className="nutrition_personal_add_example_button">Сохранить
                    </button>
                </form>
            </div>
}