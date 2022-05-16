import React, { useState } from 'react';
import './NutritionHelpBlockAllItem.css'

export default function NutritionHelpBlockAllItem({name, squirrels, fats, carbohydrates, callory, setStore, store }) {

    const [weight, setWeight] = useState('');
    const [showInput, setShowInput] = useState(false);

    function showInputClick () {
        setShowInput(!showInput);
    }

    function foodInDayImport (e) {
        e.preventDefault();
        if (store.foodData.breakfast) {
            setStore((prevStore) => {
                return {
                    ...prevStore,
                    breakfastInDay: [
                        ...prevStore.breakfastInDay,
                        {
                            name: name,
                            squirrels: squirrels,
                            fats: fats,
                            carbohydrates: carbohydrates,
                            callory: callory,
                            weight: weight    
                        }
                    ],
                    foodData: {
                        ...prevStore.foodData,
                        allSquirrelsBreakfast: prevStore.foodData.allSquirrelsBreakfast + Number(squirrels) * Number(weight) / 100,
                        allFatsBreakfast: prevStore.foodData.allFatsBreakfast + Number(fats) * Number(weight) / 100,
                        allCarbohydratesBreakfast: prevStore.foodData.allCarbohydratesBreakfast + Number(carbohydrates) * Number(weight) / 100,
                        allCalloryBreakfast: prevStore.foodData.allCalloryBreakfast + Number(callory) * Number(weight) / 100,
                    }
                }
            } )
        } else if (store.foodData.lunch) {
            setStore((prevStore) => {
                return {
                    ...prevStore,
                    lunchInDay: [
                        ...prevStore.lunchInDay,
                        {
                            name: name,
                            squirrels: squirrels,
                            fats: fats,
                            carbohydrates: carbohydrates,
                            callory: callory,
                            weight: weight    
                        }
                    ],
                    foodData: {
                        ...prevStore.foodData,
                        allSquirrelsLunch: prevStore.foodData.allSquirrelsLunch + Number(squirrels) * Number(weight) / 100,
                        allFatsLunch: prevStore.foodData.allFatsLunch + Number(fats) * Number(weight) / 100,
                        allCarbohydratesLunch: prevStore.foodData.allCarbohydratesLunch + Number(carbohydrates) * Number(weight) / 100,
                        allCalloryLunch: prevStore.foodData.allCalloryLunch + Number(callory) * Number(weight) / 100,
                    }
                }
            } )
        } else if (store.foodData.dinner) {
            setStore((prevStore) => {
                return {
                    ...prevStore,
                    dinnerInDay: [
                        ...prevStore.dinnerInDay,
                        {
                            name: name,
                            squirrels: squirrels,
                            fats: fats,
                            carbohydrates: carbohydrates,
                            callory: callory,
                            weight: weight    
                        }
                    ],
                    foodData: {
                        ...prevStore.foodData,
                        allSquirrelsDinner: prevStore.foodData.allSquirrelsDinner + Number(squirrels) * Number(weight) / 100,
                        allFatsDinner: prevStore.foodData.allFatsDinner + Number(fats) * Number(weight) / 100,
                        allCarbohydratesDinner: prevStore.foodData.allCarbohydratesDinner + Number(carbohydrates) * Number(weight) / 100,
                        allCalloryDinner: prevStore.foodData.allCalloryDinner + Number(callory) * Number(weight) / 100,
                    }
                }
            } )
        }
        console.log(store);
        setShowInput(!showInput);
    }

    return  <li className="nutrition_element" >
                <form onSubmit={foodInDayImport}>
                    <div onClick={showInputClick}>
                    <div>{name}</div>
                        <div>Белки - {squirrels + "гр"} Жиры - {fats + "гр"} Углеводы  - {carbohydrates + "гр"}</div>
                    </div>
                    <div  className={showInput ? 'active' : 'inactive'}>
                        <label  className="nutrition_label" htmlFor="nutrition_input_main">Вес(гр.)</label>
                        <input className="nutrition_input" 
                            type="text" id="nutrition_input_main" 
                            onChange={(event) => setWeight(event.target.value)}
                            required/>
                        <button 
                                type="submit" 
                                className="nutrition_personal_add__button"
                                >Добавить
                        </button> 
                    </div>
                </form>

            </li>
}