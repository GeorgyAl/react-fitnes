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

    const workoutCollectionRef = collection(db, 'WorkAllDays');

    const createWork = async () => {
        await addDoc (workoutCollectionRef, {[selectData]: store.WorkAllDays[selectData], author: {id: auth.currentUser.uid}})
    }
    const getWork = async () => {
            const data = await getDocs (workoutCollectionRef);
            const works = (data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            const worker = works.filter((work) => work.author.id === user.uid);
            if( worker.length === 0) {
                createWork();
            } else {
                for (let i = 0; i < worker.length; i++) {
                    if(worker[i].id && worker[i][selectData]) {
                        let id = worker[i].id;
                        await deleteDoc (doc(db, 'WorkAllDays', `${id}`))
                        createWork();
                    } else {
                        createWork();
                    }
                }
            }
    };

    function createWorks(e) {
        e.preventDefault();
        getWork();
    }

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