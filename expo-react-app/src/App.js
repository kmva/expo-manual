import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Lessons from './Lessons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lesson1 from './Lesson1';
import Lesson2 from './Lesson2';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/lesson1" component={Lesson1} />
          <Route path="/lesson2" component={Lesson2} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
    return (
      <div>
        <h1>Home page</h1>
      </div>
    )
}
  
export default App;

