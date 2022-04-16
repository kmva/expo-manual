import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { LessonPage } from './Pages/Lessons/LessonPage';
import { Login } from './Authentication/Login';




function App() {
  function PrivateRoute( {children} ){
    console.log(children);
    const auth = localStorage.getItem('isAuth');
    return auth ? children : <Navigate to='/' exact />
  }
  
  return (
    <Router>
      <div className="App">
       
       
       <Routes>

          <Route path='/' exact element={<Login />} />

          <Route path='/:groupNumber/lessons' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }/>
          <Route path='/:groupNumber/lessons/:id' element={<LessonPage />}/>

        </Routes>
      </div>
    </Router>
  );
}


  
export default App;

