import React from 'react'
import groupsData from '../../Data/groupsData';
import { Link } from 'react-router-dom';
import Lesson1Card from '../../Components/Lessons/GroupAB/lesson1Card';
const GroupPageD = () =>  {
 // نجيب بيانات Group A بس
  const groupA = groupsData.find(group => group.id === "d");
const handleLessonClick = (lessonId) => {
  const watched = JSON.parse(localStorage.getItem('watchedLessonsd')) || [];
  if (!watched.includes(lessonId) && localStorage.getItem("studentName")) {
    watched.push(lessonId);
    localStorage.setItem('watchedLessonsd', JSON.stringify(watched));
  }
};
const watchedLessonsd = JSON.parse(localStorage.getItem('watchedLessonsd')) || [];

  return (
    <div className='container mich' >
      <div className='row' >
        <h1 className='d-flex justify-content-center text-primary my-5'>
          Group D
        </h1>
      </div>

      <div className='row' >
        {groupA.lessons.map((lesson, index) => (
          <div key={index} className='col-12 fs-3 mb-4' >
           <Link to={`/group/${groupA.id}/lesson/${lesson.id}`} style={{ textDecoration: "none" , fontFamily:"monospace" }} onClick={() => handleLessonClick(lesson.id)}>
              <Lesson1Card title={lesson.title}   watched={watchedLessonsd.includes(lesson.id)} shadowColor={groupA.color} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupPageD