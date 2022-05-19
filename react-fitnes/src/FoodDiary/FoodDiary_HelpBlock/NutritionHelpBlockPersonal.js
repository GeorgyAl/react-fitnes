import React, {useState, useEffect} from 'react';
import './NutritionHelpBlockPersonal.css'
import NutritionHelpBlockPersonalAdd from './NutritionHelpBlockPersonalAdd';
import NutritionHelpBlockAllItem from './NutritionHelpBlockAllItem';
import { db, auth } from '../../firebaseConfig';
import { getDocs, collection } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

export default function NutritionHelpBlockPersonal({foods, onUpdateFoods, setStore, store, selectData, setSelectData }) {
    const [show, setShow] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        console.log(user)
    }, [user, setUser])

    function handleClick () {
        setShow(!show)
    }
    const [value, setValue] = useState('');

    const foodsPersonalCollectionRef = collection(db, "foodsPersonal");

    useEffect(() => {
        const getFood = async () => {
            const data = await getDocs(foodsPersonalCollectionRef);
            const foodPerson = (data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            const foodPersonUser = (foodPerson.filter((foodpersonals) => foodpersonals.author.id === user.uid));
            setStore((prevStore) => {
                return {
                    ...prevStore,
                    foodPersonal: foodPersonUser,
                }
            })
        }
        getFood();
    }, [user, setUser])


    const filteredFood  = store.foodPersonal.filter(food => {
        return food.name.toLowerCase().includes(value.toLowerCase())
    })

    return <div className="nutrition_all">
                <form action="/" method="post">
                    <input className="nutrition_main_input" 
                           type="text" 
                           placeholder="Название продуктов"
                           onChange={(event) => setValue(event.target.value)}/>
                </form>
                <form action="/" method="post">
                    <button onClick={handleClick} type="button" className={show ? "nutrition_personal_exit" : "nutrition_personal_add"}>{show ? 'Закрыть' : 'Добавить продукт'}</button>
                </form>
                {show && <NutritionHelpBlockPersonalAdd onUpdateFoods={onUpdateFoods} setStore={setStore} store={store}/>}

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