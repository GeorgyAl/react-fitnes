import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import './WorkoutMainContent.css'
import WorkoutMainContentItem from './WorkoutMainContentItem';
import { db, auth } from '../../firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, deleteField} from 'firebase/firestore';

export default function WorkoutMainContent({ helpActiveClick, store, setStore, selectData, setSelectData}) {
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [user, setUser])



    useEffect(() => {
        const fetchData = async () => {
           const data =  await getDocs (workoutCollectionRef);
           const allWorkout = (data.docs.map((doc) => ({...doc.data(), id: doc.id})));
           const newAllWorkout = allWorkout.reduce((prev, item) => {
               const key = Object.keys(item)[0];
                console.log(item, 'item')
               if (prev[key]) {
                   prev[key] = [
                       ...prev[key],
                       ...item[key],
                       ] 
               } else {
                   console.log(item, 'ITEM')
                   console.log(key, 'KEY')
                   prev[key] = [
                       ...item[key],
                   ]
               }
               return prev
           }, {})
           setStore((prevStore) => {
               return {
                   ...prevStore,
                   WorkAllDays: newAllWorkout,
               }
           })
           console.log(newAllWorkout, 'newAllWorkout')
           console.log(allWorkout, 'allWorkout')
        }
        fetchData();
    }, [])

    const workoutCollectionRef = collection(db, 'WorkAllDays');


    const createWork = async () => {
        await addDoc (workoutCollectionRef, {[selectData]: store.WorkAllDays[selectData], author: {id: auth.currentUser.uid}})
    }
    const getWork = async () => {
            /*const data = await getDocs (workoutCollectionRef);
            const works = (data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            const worker = store.WorkAllDays.filter((work) => work.author.id === user.uid);*/
            const worker = store.WorkAllDays[selectData];
            if(worker.length === 0) {
                createWork();
            } else {
                for (let i = 0; i < worker.length; i++) {
                    if(worker[i][selectData]) {
                        console.log(worker[i], 'worker[i]')
                        console.log(worker[i][selectData], 'Worker');
                        let id = worker[i].id;
                        await deleteDoc (doc(db, 'WorkAllDays', `${id}`))
                        createWork();
                    } 
                }
            }
    };

    function createWorks(e) {
        e.preventDefault();
        getWork();
    }
    console.log(store.WorkAllDays, 'общий стор')
    return <div className="workout">
                <ul className="workout_item_head">
                    <li className="workout_item" onClick={helpActiveClick}>Добавить<br/>упражнение</li>
                    <li className="workout_item">Создать<br/>тренировку</li>
                    <li className="workout_item">Добавить<br/>тренировку</li>
                    <li className="workout_item">Добавить<br/>программу</li>
                </ul>
                <div className="workout_main">
                    {selectData && store.WorkAllDays[selectData] ? store.WorkAllDays[selectData].map((exercise, index) => {
                        return <WorkoutMainContentItem key={index}
                                    name={exercise.name}
                                    gif={exercise.gif}
                                    position={index}
                                    setStore={setStore}
                                    store={store}
                                    selectData={selectData}/>
                    }) : null}
                </div>
                <button onClick={createWorks} className={selectData && store.WorkAllDays[selectData]?.length ? "calculator_button" : "calculator_button_inactive" }>Сохранить</button>
            </div>
}