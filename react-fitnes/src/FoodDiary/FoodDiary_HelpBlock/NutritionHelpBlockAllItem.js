import React, { useState } from 'react';
import './NutritionHelpBlockAllItem.css'

export default function NutritionHelpBlockAllItem({name, squirrels, fats, carbohydrates, callory, setStore, store, selectData, setSelectData }) {

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

    function foodInDayDataImport (e) {
        e.preventDefault();
        const breakfastAllDays = store.breakfastAllDays[selectData] ? { 
            ...store.breakfastAllDays, 
            [selectData]: [ 
                ...store.breakfastAllDays[selectData], 
                {
                    name: name,
                    squirrels: squirrels,
                    fats: fats,
                    carbohydrates: carbohydrates,
                    callory: callory,
                    weight: weight    
                }
            ] 
            } : { 
                ...store.breakfastAllDays, 
                [selectData]: [ 
                    {
                        name: name,
                        squirrels: squirrels,
                        fats: fats,
                        carbohydrates: carbohydrates,
                        callory: callory,
                        weight: weight    
                    }
                ] 
            };
        const lunchAllDays = store.lunchAllDays[selectData] ? { 
                ...store.lunchAllDays, 
                [selectData]: [ 
                    ...store.lunchAllDays[selectData], 
                    {
                        name: name,
                        squirrels: squirrels,
                        fats: fats,
                        carbohydrates: carbohydrates,
                        callory: callory,
                        weight: weight    
                    }
                ]
            } : { 
                    ...store.lunchAllDays, 
                    [selectData]: [ 
                        {
                            name: name,
                            squirrels: squirrels,
                            fats: fats,
                            carbohydrates: carbohydrates,
                            callory: callory,
                            weight: weight    
                        }
                    ] 
            }; 
        const dinnerAllDays = store.dinnerAllDays[selectData] ? { 
                    ...store.dinnerAllDays, 
                    [selectData]: [ 
                        ...store.dinnerAllDays[selectData], 
                        {
                            name: name,
                            squirrels: squirrels,
                            fats: fats,
                            carbohydrates: carbohydrates,
                            callory: callory,
                            weight: weight    
                        }
                    ] 
            } : { 
                        ...store.dinnerAllDays, 
                        [selectData]: [ 
                            {
                                name: name,
                                squirrels: squirrels,
                                fats: fats,
                                carbohydrates: carbohydrates,
                                callory: callory,
                                weight: weight    
                            }
                        ] 
            }; 
        if(selectData && store.foodData.breakfast) { 
            setStore((prevStore) => { 
                return { 
                    ...prevStore, 
                    breakfastAllDays: breakfastAllDays,
                    foodCalc: {
                        ...prevStore.foodCalc,
                        [selectData] : {
                            ...prevStore.foodCalc[selectData],
                            allSquirrelsBreakfast: store.foodCalc[selectData].allSquirrelsBreakfast + Number(squirrels) * Number(weight) / 100,
                            allFatsBreakfast: store.foodCalc[selectData].allFatsBreakfast + Number(fats) * Number(weight) / 100,
                            allCarbohydratesBreakfast: store.foodCalc[selectData].allCarbohydratesBreakfast + Number(carbohydrates) * Number(weight) / 100,
                            allCalloryBreakfast: store.foodCalc[selectData].allCalloryBreakfast + Number(callory) * Number(weight) / 100,
                        }
                    }
                } 
            }) 
        } else if (selectData && store.foodData.lunch) {
            setStore((prevStore) => { 
                return { 
                    ...prevStore, 
                    lunchAllDays: lunchAllDays,
                    foodCalc: {
                        ...prevStore.foodCalc,
                        [selectData] : {
                            ...prevStore.foodCalc[selectData],
                            allSquirrelsLunch: store.foodCalc[selectData].allSquirrelsLunch + Number(squirrels) * Number(weight) / 100,
                            allFatsLunch: store.foodCalc[selectData].allFatsLunch + Number(fats) * Number(weight) / 100,
                            allCarbohydratesLunch: store.foodCalc[selectData].allCarbohydratesLunch + Number(carbohydrates) * Number(weight) / 100,
                            allCalloryLunch: store.foodCalc[selectData].allCalloryLunch + Number(callory) * Number(weight) / 100,
                        }
                    }
                } 
            })
        } else if (selectData && store.foodData.dinner) {
            setStore((prevStore) => { 
                return { 
                    ...prevStore, 
                    dinnerAllDays: dinnerAllDays,
                    foodCalc: {
                        ...prevStore.foodCalc,
                        [selectData] : {
                            ...prevStore.foodCalc[selectData],
                            allSquirrelsDinner: store.foodCalc[selectData].allSquirrelsDinner + Number(squirrels) * Number(weight) / 100,
                            allFatsDinner: store.foodCalc[selectData].allFatsDinner + Number(fats) * Number(weight) / 100,
                            allCarbohydratesDinner: store.foodCalc[selectData].allCarbohydratesDinner + Number(carbohydrates) * Number(weight) / 100,
                            allCalloryDinner: store.foodCalc[selectData].allCalloryDinner + Number(callory) * Number(weight) / 100,
                        }
                    }
                } 
            })
        }
        console.log(store)
        setShowInput(!showInput);
    }
    return  <li className="nutrition_element" >
                <form onSubmit={foodInDayDataImport}>
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