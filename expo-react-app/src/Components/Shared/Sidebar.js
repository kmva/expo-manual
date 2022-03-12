import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./Sidebar.css";
import frontend from '../../data/frontend';


 
 export const Sidebar = () => {
     
      //const [lessons, setLessons] = useState(lessons);

      
     return (
        <div className="sidebar">
          <div className="sidebar-header">

                <h2>{frontend.info.lesson}</h2>
                <h3>{frontend.info.teacher}</h3> 
                
          </div>
          
          {
            frontend.lessons.map(lesson => (
              <Link key={lesson.id} to={`/lessons/${lesson.id}`}>
                <li>{lesson.title}</li>
              </Link>
            ))
          }

          <progress value="1" max="5"></progress>

        </div>
     )
     
 }
 

 