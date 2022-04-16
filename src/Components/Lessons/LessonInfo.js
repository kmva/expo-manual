import React from 'react';
import frontend from '../../data/frontend';
import links from '../../data/links';
import { useParams } from 'react-router-dom';




export const LessonInfo = () => {

    

let { id } = useParams();

const lesson = frontend.lessons.find(lesson => lesson.id ==  id) 


    
    return (
        <div className="lesson-content">
            <h1>{lesson.title}</h1>
            <h3>Краткий конспект</h3>
            <p>{lesson.text}</p>
            <p>{lesson.link}</p>

            <h3>Домашнее задание</h3>
            <p>{lesson.homework}</p>

            <h3>Полезные ссылки, материалы</h3>
            <p>Lorem ipsum dolor sit amett</p>
            <p>Lorem ipsum dolor sit amett</p>


        </div>
    )
}
