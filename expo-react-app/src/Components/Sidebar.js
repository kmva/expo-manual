import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons';
 
 const Sidebar = () => {
     return (
         <div className="Sidebar">

        <div className="SidebarHeader">
          <h2>Курс по front-end разработке</h2>
          <h3>Преподаватель : Каимова Фариза</h3>
        </div>

        <ul className="Lessons">
          <li><Link to="/Lesson1">Урок 1</Link></li>
          <li><Link to="/Lesson2">Урок 2</Link></li>
          <li>Урок 3</li>
          <li>Урок 4</li>
          <li>Урок 5</li>
        </ul>

        <progress value="1" max="5"></progress>

      </div>
     )
 }
 
export default Sidebar;
 