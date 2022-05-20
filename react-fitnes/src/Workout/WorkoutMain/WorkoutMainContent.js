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


    const updateInfo = (array, id) => {
        return array.map((item) => ({ ...item, id: id, author: { id: auth.currentUser.uid} }))
    }
    const workoutCollectionRef = collection(db, 'WorkingAllDays');


    useEffect(() => {
        const fetchData = async () => {
           const data =  await getDocs (workoutCollectionRef);
           const allWorkout = (data.docs.map((doc) => ({...doc.data(), id: doc.id})));
           const allWorkoutUser = user?.uid  ? (allWorkout.filter((post) => post.author.id === user.uid)) : [];
           const newAllWorkout = allWorkoutUser.reduce((prev, item) => {
           console.log("🚀 ITEM.ID", item.id)
            const key = Object.keys(item).sort()[0];
                const listUpdated = updateInfo(item[key], item.id);
               if (prev[key]) {
                   prev[key] = [
                       ...updateInfo(prev[key]),
                       ...listUpdated,
                   ]
               } else {
                   prev[key] = [
                    ...listUpdated,
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
    }, [user, setUser])



    const createWork = async () => {
        await addDoc (workoutCollectionRef, {[selectData]: store.WorkAllDays[selectData], author: {id: auth.currentUser.uid} })
        const fetchData = async () => {
            const data =  await getDocs (workoutCollectionRef);
            const allWorkout = (data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            const newAllWorkout = allWorkout.reduce((prev, item) => {
            console.log("🚀 ITEM.ID", item.id)
             const key = Object.keys(item).sort()[0];
                 const listUpdated = updateInfo(item[key], item.id);
                if (prev[key]) {
                    prev[key] = [
                        ...updateInfo(prev[key]),
                        ...listUpdated,
                    ]
                } else {
                    prev[key] = [
                     ...listUpdated,
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
    }

    const getWork = async () => {
            const worker = store.WorkAllDays[selectData];
            for (let i = 0; i < worker.length; i++) {
                const id = worker[i].id;
                if(id) {
                    await deleteDoc (doc(db, 'WorkingAllDays', `${id}`))
                }
            }
            createWork()

    };
    function createWorks(e) {
        e.preventDefault();
        getWork();
    }
    return <div className="workout">
                <ul className="workout_item_head">
                    <li className="workout_item" onClick={helpActiveClick}>Добавить<br/>упражнение</li>
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