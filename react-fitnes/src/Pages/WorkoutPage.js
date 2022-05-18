import React, { useState } from 'react';
import CommonBlock from '../CommonBlock/CommonBlock/CommonBlock'
import WorkoutMain from '../Workout/WorkoutMain/WorkoutMain';
import WorkoutHelp from '../Workout/WorkoutHelp/WorkoutHelp';
import initialState from '../Store/store';
export default function WorkoutPage() {

  const [helpActive, setHelpActive] = useState(false);
  const [selectData, setSelectData] = useState('');

  function helpActiveClick () {
    setHelpActive(true)
  }
   function helpInactiveClick () {
     setHelpActive(false)
   }

   const[store, setStore] = useState(initialState);

  return <main>
              <CommonBlock/>
              <WorkoutMain helpActiveClick={helpActiveClick} store={store} setStore={setStore} selectData={selectData} setSelectData={setSelectData}/>
              {helpActive && <WorkoutHelp helpInactiveClick={helpInactiveClick} setStore={setStore} store={store} selectData={selectData} setSelectData={setSelectData}/>}
          </main>

}