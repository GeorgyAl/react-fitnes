import React, { useState } from 'react';
import CommonBlock from '../CommonBlock/CommonBlock/CommonBlock'
import FoodDiaryHelpBlock from '../FoodDiary/FoodDiary_HelpBlock/FoodDiaryHelpBlock';
import FoodDiaryMainBlock from '../FoodDiary/FoodDiary_MainBlock/FoodDiaryMainBlock'
import initialState from '../Store/store';
export default function FoodDiaryPage() {

  const[store, setStore] = useState(initialState);
  const [helpActive, setHelpActive] = useState(false);

  function helpActiveClickBreakfast () {
    setHelpActive(true);
    store.foodData.breakfast = true;
    store.foodData.lunch = false;
    store.foodData.dinner = false;
  }

  function helpActiveClickLunch () {
    setHelpActive(true);
    store.foodData.breakfast = false;
    store.foodData.lunch = true;
    store.foodData.dinner = false;
  }

  function helpActiveClickDinner () {
    setHelpActive(true);
    store.foodData.breakfast = false;
    store.foodData.lunch = false;
    store.foodData.dinner = true;
  }

   function helpInactiveClick () {
     setHelpActive(false)
   }
   
  return <main>
              <CommonBlock/>
              <FoodDiaryMainBlock
                helpActiveClickLunch={helpActiveClickLunch} 
                helpActiveClickDinner={helpActiveClickDinner} 
                helpActiveClickBreakfast={helpActiveClickBreakfast}
                store={store}
                setStore={setStore}/>
              {helpActive && <FoodDiaryHelpBlock helpInactiveClick={helpInactiveClick} setStore={setStore} store={store}/>}
          </main>

}