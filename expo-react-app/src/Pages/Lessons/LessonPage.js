import "./LessonPage.css";
import { Sidebar } from "../../Components/Shared/Sidebar";
import frontend from "../../data/frontend";
import { LessonInfo } from "../../Components/Lessons/LessonInfo";


export const LessonPage = () => {

    return (

        
        <div className="lesson-page">
            
            <Sidebar />
            <LessonInfo />
             
        </div>
    )
}

