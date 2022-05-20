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
              <Route path='/react-fitnes/' element={<FoodDiaryPage/>}/>
              <Route path='/react-fitnes/workout' element={<WorkoutPage/>}/>
              <Route path='/react-fitnes/weight' element={<WeightContolPage/>}/>
              <Route path='/react-fitnes/auth' element={<AuthorizationPage/>}/>
              <Route path='/react-fitnes/registration' element={<RegistrationPage/>}/>
              <Route path='/react-fitnes/home' element={<HomePage/>}/>
          </Routes>
        </>
    
}

export default App;
