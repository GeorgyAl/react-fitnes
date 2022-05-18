import React, { useState, useEffect } from 'react';
import './NutritionHelpBlockAll.css'
import NutritionHelpBlockAllItem from './NutritionHelpBlockAllItem';
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../firebaseConfig';

export default function NutritionHelpBlockAll({ setStore, store, selectData, setSelectData }) {

    const [value, setValue] = useState('');
    const [foods, setFoods] = useState([]);
    const foodsCollectionRef = collection(db, "foods");

    useEffect(() => {
        const getFood = async () => {
            const data = await getDocs(foodsCollectionRef);
            setFoods(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getFood();
    }, [])

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
                <ul className="nutrition_block">
                    {filteredFood.map((food, index) => {
                        return <NutritionHelpBlockAllItem key={index} 
                                    name={food.name}
                                    squirrels={food.squirrels}
                                    fats={food.fats}
                                    carbohydrates={food.carbohydrates}
                                    callory={food.callory}
                                    setStore={setStore}
                                    store={store}
                                    selectData={selectData}
                                    setSelectData={setSelectData}/>
                    })}
                </ul>
            </div>
}
