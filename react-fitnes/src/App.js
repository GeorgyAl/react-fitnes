import React from 'react';
import Header from './Header/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import WorkoutPage from './Pages/WorkoutPage'
import FoodDiaryPage from './Pages/FoodDiaryPage'
import WeightContolPage from './Pages/WeightControlPage'
import AuthorizationPage from './Pages/AuthorizationPage'
import RegistrationPage from './Pages/RegistrationPage'
import HomePage from './Pages/HomePage';

function App() {
  return <>
          <div>
            <Header/>
          </div>
          <Routes>
              <Route path='*' element={<FoodDiaryPage/>}/>
              <Route path='/workout' element={<WorkoutPage/>}/>
              <Route path='/weight' element={<WeightContolPage/>}/>
              <Route path='/auth' element={<AuthorizationPage/>}/>
              <Route path='/registration' element={<RegistrationPage/>}/>
              <Route path='/home' element={<HomePage/>}/>
          </Routes>
        </>
    
}

export default App;
