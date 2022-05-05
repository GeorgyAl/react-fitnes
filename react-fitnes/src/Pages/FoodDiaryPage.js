import React from 'react';
import CommonBlock from '../CommonBlock/CommonBlock/CommonBlock'
import FoodDiaryHelpBlock from '../FoodDiary/FoodDiary_HelpBlock/FoodDiaryHelpBlock';
import FoodDiaryMainBlock from '../FoodDiary/FoodDiary_MainBlock/FoodDiaryMainBlock'

export default function FoodDiaryPage() {
  return <main>
              <CommonBlock/>
              <FoodDiaryMainBlock/>
              <FoodDiaryHelpBlock/>
          </main>

}