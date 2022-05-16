import React from 'react';
import './FoodDiaryNutritionForm.css'
export default function FoodDiaryNutritionForm({ helpActiveClickLunch, helpActiveClickDinner, helpActiveClickBreakfast, setStore, store }) {
    const removeAllItemsBreakfast = () => {
        const temp = [...store.breakfastInDay];
        temp.splice(0, temp.length);
        setStore((prevStore) => {
            return {
                ...prevStore,
                breakfastInDay: temp,
                foodData: {
                    ...prevStore.foodData,
                    allSquirrelsBreakfast: 0,
                    allFatsBreakfast: 0,
                    allCarbohydratesBreakfast:0,
                    allCalloryBreakfast: 0,
                }
            }      
        })
    }
    const removeAllItemsLunch = () => {
        const temp = [...store.lunchInDay];
        temp.splice(0, temp.length);
        setStore((prevStore) => {
            return {
                ...prevStore,
                lunchInDay: temp,
                foodData: {
                    ...prevStore.foodData,
                    allSquirrelsLunch: 0,
                    allFatsLunch: 0,
                    allCarbohydratesLunch:0,
                    allCalloryLunch: 0,
                }
            }            
        })
    }
    const removeAllItemsDinner = () => {
        const temp = [...store.dinnerInDay];
        temp.splice(0, temp.length);
        setStore((prevStore) => {
            return {
                ...prevStore,
                dinnerInDay: temp,
                foodData: {
                    ...prevStore.foodData,
                    allSquirrelsDinner: 0,
                    allFatsDinner: 0,
                    allCarbohydratesDinner:0,
                    allCalloryDinner: 0,
                }
            }            
        })
    }
    
    return <form action="/" method="post">
    <div className="block">
        <div className="food">
            <div>Завтрак</div> 
            <div className="food_input">
                {store.breakfastInDay.map((food, index) => {
                        return <div className='foodInDay' key={index}>{food.name}({food.weight + 'гр.'})</div>
                })}
                <button onClick={removeAllItemsBreakfast} type="button" className="delete_vector"></button>
            </div>
            <button onClick={helpActiveClickBreakfast} className="plus" type='button'></button>
        </div>
    </div>
    <div className="block">
        <div className="food">
            <div>Обед</div> 
            <div className="food_input">
                {store.lunchInDay.map((food, index) => {
                        return <div className='foodInDay' key={index}>{food.name}({food.weight + 'гр.'})</div>
                })}
                <button onClick={removeAllItemsLunch} type="button" className="delete_vector"></button>
            </div>
            <button onClick={helpActiveClickLunch} className="plus" type='button'></button>
        </div>
    </div>
    <div className="block">
        <div className="food">
            <div>Ужин</div> 
            <div className="food_input">
                {store.dinnerInDay.map((food, index) => {
                        return <div className='foodInDay' key={index}>{food.name}({food.weight + 'гр.'})</div>
                })}
                <button onClick={removeAllItemsDinner} type="button" className="delete_vector"></button>
            </div>
            <button onClick={helpActiveClickDinner} className="plus" type='button'></button>
        </div>
    </div>
</form>
}