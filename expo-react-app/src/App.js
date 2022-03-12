import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { LessonPage } from './Pages/Lessons/LessonPage';
import { useParams } from 'react-router-dom';

function Lesson () {
  let { id } = useParams();
  
}

function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>

          <Route path='/' exact element={<Home />}/>
          <Route path='/lessons' element={<Home />}/>
          <Route path='/lessons/:id' element={<LessonPage />}/>

        </Routes>
      </div>
    </Router>
  );
}


  
export default App;

