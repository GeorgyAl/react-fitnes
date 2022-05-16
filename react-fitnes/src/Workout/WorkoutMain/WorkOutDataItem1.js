import React, { useState } from 'react';
import './WorkoutData.css'

export default function WorkoutDataItem2({ setStore, store }) {
    const [daY1, setDaY1] = useState(false);
    const [daY2, setDaY2] = useState(false);
    const [daY3, setDaY3] = useState(false);
    const [daY4, setDaY4] = useState(false);
    const [daY5, setDaY5] = useState(false);
    const [daY6, setDaY6] = useState(false);
    const [daY7, setDaY7] = useState(false);
    let count;
    function dataWork () {        
        if(count === 1) {
            for(let i = 0; i < 7; i++) {
                store.days1[i].position = false;
                store.days2[i].position = false;
            }
            store.days1[0].position = true;
        } else if(count === 2) {
            for(let i = 0; i < 7; i++) {
                store.days1[i].position = false;
                store.days2[i].position = false;
            }
            store.days1[1].position = true;
        } else if(count === 3) {
            for(let i = 0; i < 7; i++) {
                store.days1[i].position = false;
                store.days2[i].position = false;
            }
            store.days1[2].position = true;
        } else if(count === 4) {
            for(let i = 0; i < 7; i++) {
                store.days1[i].position = false;
                store.days2[i].position = false;
            }
            store.days1[3].position = true;
        } else if(count === 5) {
            for(let i = 0; i < 7; i++) {
                store.days1[i].position = false;
                store.days2[i].position = false;
            }
            store.days1[4].position = true;
        } else if(count === 6) {
            for(let i = 0; i < 7; i++) {
                store.days1[i].position = false;
                store.days2[i].position = false;
            }
            store.days1[5].position = true;
        } else if(count === 7) {
            for(let i = 0; i < 7; i++) {
                store.days1[i].position = false;
                store.days2[i].position = false;
            }
            store.days1[6].position = true;
        }
        
    }
    function handle1() {
        setDaY1(true);
        setDaY2(false);
        setDaY3(false);
        setDaY4(false);
        setDaY5(false);
        setDaY6(false);
        setDaY7(false);
        count = 1;
        dataWork();
        console.log(store);
    }
    function handle2() {
        setDaY2(true);
        setDaY1(false);
        setDaY3(false);
        setDaY4(false);
        setDaY5(false);
        setDaY6(false);
        setDaY7(false);
        count = 2;
        dataWork();
    }
    function handle3() {
        setDaY3(true);
        setDaY2(false);
        setDaY1(false);
        setDaY4(false);
        setDaY5(false);
        setDaY6(false);
        setDaY7(false);
        count = 3;
        dataWork();
    }
    function handle4() {
        setDaY4(true);
        setDaY2(false);
        setDaY3(false);
        setDaY1(false);
        setDaY5(false);
        setDaY6(false);
        setDaY7(false);
        count = 4;
        dataWork();
    }
    function handle5() {
        setDaY5(true);
        setDaY2(false);
        setDaY3(false);
        setDaY4(false);
        setDaY1(false);
        setDaY6(false);
        setDaY7(false);
        count = 5;
        dataWork();
    }
    function handle6() {
        setDaY6(true);
        setDaY2(false);
        setDaY3(false);
        setDaY4(false);
        setDaY5(false);
        setDaY1(false);
        setDaY7(false);
        count = 6;
        dataWork();
    }
    function handle7() {
        setDaY7(true);
        setDaY2(false);
        setDaY3(false);
        setDaY4(false);
        setDaY5(false);
        setDaY6(false);
        setDaY1(false);
        count = 7;
        dataWork();
    }

    return  <>
                <li onClick={handle1} className={daY1 ? "data_active" : "data"}>{store.days1[0].day}</li>
                <li onClick={handle2} className={daY2 ? "data_active" : "data"}>{store.days1[1].day}</li>
                <li onClick={handle3} className={daY3 ? "data_active" : "data"}>{store.days1[2].day}</li>
                <li onClick={handle4} className={daY4 ? "data_active" : "data"}>{store.days1[3].day}</li>
                <li onClick={handle5} className={daY5 ? "data_active" : "data"}>{store.days1[4].day}</li>
                <li onClick={handle6} className={daY6 ? "data_active" : "data"}>{store.days1[5].day}</li>
                <li onClick={handle7} className={daY7 ? "data_active" : "data"}>{store.days1[6].day}</li>
            </>
    
}