import React from 'react';
import './Lessons';
import Lessons from './Lessons';

const Lesson1 = () => {
    return (
        <div className="MainContent">
            <div>
                <h1>{Lessons.Lesson1.title}</h1>
                <h2>Краткий конспект</h2>
                <p>{Lessons.Lesson1.text}</p>

                    <p className="LessonLink">ссылка на видеозапись : {Lessons.Lesson1.link}</p>
            </div>

            <div>
                <h2>
                    Домашнее Задание
                </h2>
                <p>
                    {Lessons.Lesson1.homework}
                </p>
            </div>

            <div>
                <h2>
                    Полезные ссылки, материалы
                </h2>
                <p>this is the first link</p>
                <p>this is the second link</p>
            </div>
      
        </div>
    )
}

export default Lesson1;
