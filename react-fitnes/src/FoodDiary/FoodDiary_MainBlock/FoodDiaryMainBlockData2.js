import React, { useState } from 'react';
import './FoodDiaryMainBlockData.css'

export default function FoodDiaryMainBlockData2({ setStore, store, selectData, setSelectData }) {
    const [daY1, setDaY1] = useState(false);
    const [daY2, setDaY2] = useState(false);
    const [daY3, setDaY3] = useState(false);
    const [daY4, setDaY4] = useState(false);
    const [daY5, setDaY5] = useState(false);
    const [daY6, setDaY6] = useState(false);
    const [daY7, setDaY7] = useState(false);
    function handle1() {
        setDaY1(true);
        setDaY2(false);
        setDaY3(false);
        setDaY4(false);
        setDaY5(false);
        setDaY6(false);
        setDaY7(false);
        setSelectData('10.05')
    }
    function handle2() {
        setDaY2(true);
        setDaY1(false);
        setDaY3(false);
        setDaY4(false);
        setDaY5(false);
        setDaY6(false);
        setDaY7(false);
        setSelectData('11.05')
    }
    function handle3() {
        setDaY3(true);
        setDaY2(false);
        setDaY1(false);
        setDaY4(false);
        setDaY5(false);
        setDaY6(false);
        setDaY7(false);
        setSelectData('12.05')
    }
    function handle4() {
        setDaY4(true);
        setDaY2(false);
        setDaY3(false);
        setDaY1(false);
        setDaY5(false);
        setDaY6(false);
        setDaY7(false);
        setSelectData('13.05')
    }
    function handle5() {
        setDaY5(true);
        setDaY2(false);
        setDaY3(false);
        setDaY4(false);
        setDaY1(false);
        setDaY6(false);
        setDaY7(false);
        setSelectData('14.05')
    }
    function handle6() {
        setDaY6(true);
        setDaY2(false);
        setDaY3(false);
        setDaY4(false);
        setDaY5(false);
        setDaY1(false);
        setDaY7(false);
        setSelectData('15.05')
    }
    function handle7() {
        setDaY7(true);
        setDaY2(false);
        setDaY3(false);
        setDaY4(false);
        setDaY5(false);
        setDaY6(false);
        setDaY1(false);
        setSelectData('16.05')
    }

    return  <>
                <li onClick={handle1} className={daY1 ? "data_active" : "data"}>{store.days2[0].day}</li>
                <li onClick={handle2} className={daY2 ? "data_active" : "data"}>{store.days2[1].day}</li>
                <li onClick={handle3} className={daY3 ? "data_active" : "data"}>{store.days2[2].day}</li>
                <li onClick={handle4} className={daY4 ? "data_active" : "data"}>{store.days2[3].day}</li>
                <li onClick={handle5} className={daY5 ? "data_active" : "data"}>{store.days2[4].day}</li>
                <li onClick={handle6} className={daY6 ? "data_active" : "data"}>{store.days2[5].day}</li>
                <li onClick={handle7} className={daY7 ? "data_active" : "data"}>{store.days2[6].day}</li>
            </>
    
}