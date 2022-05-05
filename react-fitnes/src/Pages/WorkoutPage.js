import React from 'react';
import CommonBlock from '../CommonBlock/CommonBlock/CommonBlock'
import WorkoutMain from '../Workout/WorkoutMain/WorkoutMain';
import WorkoutHelp from '../Workout/WorkoutHelp/WorkoutHelp';

export default function WorkoutPage() {
  return <main>
              <CommonBlock/>
              <WorkoutMain/>
              <WorkoutHelp/>
          </main>

}