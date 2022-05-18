import React from 'react';
import './FoodDiaryNutritionForm.css'
export default function FoodDiaryNutritionForm({ helpActiveClickLunch, helpActiveClickDinner, helpActiveClickBreakfast, setStore, store, selectData, setSelectData }) {
    const removeAllItemsBreakfast = () => {
        const temp = {...store.breakfastAllDays};
        temp[selectData].splice(0, temp[selectData].length);
        setStore((prevStore) => {
            return {
                ...prevStore,
                breakfastAllDays: temp,
                foodCalc: {
                    ...prevStore.foodCalc,
                    [selectData] : {
                        ...prevStore.foodCalc[selectData],
                        allSquirrelsBreakfast: 0,
                        allFatsBreakfast: 0,
                        allCarbohydratesBreakfast: 0,
                        allCalloryBreakfast: 0,
                    }
                }
            }      
        })
    }
    const removeAllItemsLunch = () => {
        const temp = {...store.lunchAllDays};
        temp[selectData].splice(0, temp[selectData].length);
        setStore((prevStore) => {
            return {
                ...prevStore,
                lunchAllDays: temp,
                foodCalc: {
                    ...prevStore.foodCalc,
                    [selectData] : {
                        ...prevStore.foodCalc[selectData],
                        allSquirrelsLunch: 0,
                        allFatsLunch: 0,
                        allCarbohydratesLunch:0,
                        allCalloryLunch: 0,
                    }
                }
            }            
        })
    }
    const removeAllItemsDinner = () => {
        const temp = {...store.dinnerAllDays};
        temp[selectData].splice(0, temp[selectData].length);
        setStore((prevStore) => {
            return {
                ...prevStore,
                dinnerAllDays: temp,
                foodCalc: {
                    ...prevStore.foodCalc,
                    [selectData]: {
                        ...prevStore.foodCalc[selectData],
                        allSquirrelsDinner: 0,
                        allFatsDinner: 0,
                        allCarbohydratesDinner:0,
                        allCalloryDinner: 0,
                    }
                }
            }            
        })
    }
    
    return <form action="/" method="post">
    <div className="block">
        <div className="food">
            <div>Завтрак</div> 
            <div className="food_input">
                {selectData && store.breakfastAllDays[selectData] ? store.breakfastAllDays[selectData].map((food, index) => {
                        return <div className='foodInDay' key={index}>{food.name}({food.weight + 'гр.'})</div>
                }) : null}
                <button onClick={removeAllItemsBreakfast} type="button" className="delete_vector"></button>
            </div>
            <button onClick={helpActiveClickBreakfast} className="plus" type='button'></button>
        </div>
    </div>
    <div className="block">
        <div className="food">
            <div>Обед</div> 
            <div className="food_input">
            {selectData && store.lunchAllDays[selectData] ? store.lunchAllDays[selectData].map((food, index) => {
                        return <div className='foodInDay' key={index}>{food.name}({food.weight + 'гр.'})</div>
                }) : null}
                <button onClick={removeAllItemsLunch} type="button" className="delete_vector"></button>
            </div>
            <button onClick={helpActiveClickLunch} className="plus" type='button'></button>
        </div>
    </div>
    <div className="block">
        <div className="food">
            <div>Ужин</div> 
            <div className="food_input">
            {selectData && store.dinnerAllDays[selectData] ? store.dinnerAllDays[selectData].map((food, index) => {
                        return <div className='foodInDay' key={index}>{food.name}({food.weight + 'гр.'})</div>
                }) : null}
                <button onClick={removeAllItemsDinner} type="button" className="delete_vector"></button>
            </div>
            <button onClick={helpActiveClickDinner} className="plus" type='button'></button>
        </div>
    </div>
</form>
}