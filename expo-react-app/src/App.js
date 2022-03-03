import './App.css';
import './Components/Sidebar';
import Sidebar from './Components/Sidebar';
import Lessons from './Components/Lessons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Lesson1 from './Components/Lesson1';
import Lesson2 from './Components/Lesson2';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Lesson1 />
      </div>
    </Router>
  );
}

export default App;

