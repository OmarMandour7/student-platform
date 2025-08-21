import React from 'react'
import groupsData from '../../Data/groupsData';
import { Link } from 'react-router-dom';
import Lesson1Card from '../../Components/Lessons/GroupAB/lesson1Card';

const GroupPageD = () => {
  // نجيب بيانات Group A بس
  const groupd = groupsData.find(group => group.id === "d");
const videoLessons = groupd.lessons.filter(lesson => lesson.type === "video");
const pdfLessons = groupd.lessons.filter(lesson => lesson.type === "pdf");

const handleLessonClick = (lessonId) => {
  const watched = JSON.parse(localStorage.getItem('watchedLessonsd')) || [];
  if (!watched.includes(lessonId) && localStorage.getItem("studentName")) {
    watched.push(lessonId);
    localStorage.setItem('watchedLessonsd', JSON.stringify(watched));
  }
};
  return (
      <div className='container mich' >
      <div className='row g-6 ' >
        <h1 className='d-flex justify-content-center text-primary my-5'>
          Group D
        </h1>
      </div>

      <div className='row d-flex justify-content-evenly ' >
        <h1 className='mb-5'>
          Document Lessons 
        </h1>
        {pdfLessons.map((lesson, index) => (
          <div key={index} className='col-6 col-md-3 col-lg-4   mb-4 px-1' >
        <Link to={`/group/${groupd.id}/lesson/${lesson.id}`} className='hov ' style={{ textDecoration: "none" , fontFamily:"monospace" }} onClick={() => handleLessonClick(lesson.id)}>
              <Lesson1Card title={lesson.title}   type={lesson.type} id={lesson.id} char={groupd.id.toLowerCase()} />
            </Link>
          </div>
        ))}
      </div>
        <div className='row d-flex justify-content-evenly' >
             <h1 className='mb-5'>
          Videos  
        </h1>
        {videoLessons.map((lesson, index) => (
          <div key={index} className='col-6 col-md-3 col-lg-3   mb-4  px-1' >
        <Link to={`/group/${groupd.id}/lesson/${lesson.id}`} className='hov '  style={{ textDecoration: "none" , fontFamily:"monospace" }} onClick={() => handleLessonClick(lesson.id)}>
              <Lesson1Card title={lesson.title}   type={lesson.type} id={lesson.id} char={groupd.id.toLowerCase()} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupPageD