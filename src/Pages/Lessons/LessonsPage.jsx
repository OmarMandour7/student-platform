import React, { useState, useEffect   } from 'react';
import { useParams } from 'react-router-dom';
import groupsData from '../../Data/groupsData';
import GoogleDrivePdfViewer from '../../Components/Utility/GoogleDrivePdfViewer';
import { ClipLoader } from "react-spinners";


const LessonPage = () => {
const override  = {
  display: "block",
  margin: "0",
  borderColor: "blue",
};
  const { groupId, lessonId } = useParams();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const savedName = localStorage.getItem('studentName');
  const commentKey = `comments_${groupId.toUpperCase()}_${lessonId}`;

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(commentKey)) || [];
    setComments(savedComments);
  }, [commentKey]);
const handleComment = async () => {
  if (comment.trim() !== '') {
  const newComment = {
  name: savedName,
  group: groupId.toUpperCase(),
  lesson: lessonId,
  text: comment,
  date: new Date().toLocaleString(),
};


    try {
      // URL بتاع Google Form
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScBMGewVXyjqR0nb7oCaMXXX8rIedN6PnOSARmnMD1dB-II0Q/formResponse';

      // استبدل entry.xxxxxx بالأرقام من الفورم الحقيقي بتاعك
      const formData = new FormData();
      formData.append('entry.2143373516', newComment.name);
      formData.append('entry.114115262', newComment.group); // Group ID
      formData.append('entry.1568164673', newComment.lesson); // Lesson ID
      formData.append('entry.85141780', newComment.text); // Comment

      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors', // مهم جدا
        body: formData,
      });

      setComments([...comments, newComment]);
      setComment('');
    } catch (err) {
      console.error('Error sending comment:', err);
    }
  }
};
useEffect(() => {
  const getComments = async () => {
    try {
      const res = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLh7LOnZs_gvCo2Zq7JSWa3Wg5AQFwqBIt0tHM2-YU7bFNqrbwRbI6ayx7s_8rFaOEGUm_dKZpC2IH9CL2KCH7FnltBkj0aGzSD0gL69zLJLVKuQGUPAqDbsANZRLkiYyV-mALOBEuVb1Urm_7N86UlZr98V2Qtrm3PAktfS7YHABIOkPhP5IlQvASNTpz04yiuCylLRhzcaRE6lEmmg_cRGOeewi3j5H9nEX-Kah_DQZEoQe2YowEqLAVEjU669xwe6UhUFXW3ekQ4b4KSg-6K8b2RHnXetGmIZpZ9p&lib=Mj8M06WZAZMmD2WibGf3yRnv43jEim-T7');
      const data = await res.json();
     
      const filtered = data.filter((c) =>
        c.group === groupId.toUpperCase() &&
        c.lesson.toString() === lessonId.toString()
      );  
              

    setComments(filtered.map((c) => ({
  name: c.name,
  text: c.comment,
  date: c.date,
})));

    } catch (err) {
      console.error('Error loading comments', err);
    }
  };

  getComments();
}, [lessonId , groupId]);


  const group = groupsData.find(g => g.id === groupId.toLowerCase());
  const lesson = group?.lessons.find(l => l.id === lessonId);
  if (!group || !lesson) {
    return <h2 className="text-danger text-center my-5">Lesson Not Found</h2>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-secondary text-center cairo">{lesson.title}</h1>
      {
        lesson.type === "video" ?  <div className="my-5">
        <h4>Videos</h4>
        {lesson.videos.map((videoUrl, index) => (
          <div key={index} className="mb-3 rounded-5 p-4 " style={{backgroundColor : "#343A40"}}> 
            <iframe
              width="100%"
              height="500px"
              src={videoUrl}
              title={`Video ${index + 1}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
        {lesson.activityLink === " " ? (<div></div>) :  <div className="my-5">
        <h4>Activity</h4>
        <a href={lesson.activityLink} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">Visit Activity</button>
        </a>
      </div>
      }
      </div> :<div></div>
      }
       {
        lesson.type === "pdf" ?  <div className="my-5">
        <h4>PDF</h4>
      
          <GoogleDrivePdfViewer pdfId={lesson.pdfId} />
        
      </div> :<div></div>
      }
     

      <div className="my-4 text-center justify-content-center">
        <h1 className="text-success text-center cairo my-5">Finished Lesson?</h1>
        <span className="text-secondary text-center cairo d-flex">Leave Comment</span>

        <textarea
          className="col-12 my-2 rounded-3 shadow-lg"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ minHeight: '150px' }}
        ></textarea>

        <div className="text-end my-1">
          <button className="btn btn-primary" onClick={handleComment}>
            Comment
          </button>
        </div>

        {comments.length > 0 ? (
          <div className="my-4 text-start">
            <h5 className="text-info">Comments</h5>
            {comments.map((c, idx) => (
              <div key={idx} className="bg-light p-2 my-2 rounded">
                <strong>{c.name}</strong> <small className="text-muted">({c.date})</small>
                <p className="mb-0 fs-">{c.text}</p>
              </div>
            ))}
          </div>
        ) : (
        <ClipLoader
        color={"black"}
        loading={true}
       cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        )}
      </div>
    </div>
  );
};

export default LessonPage;
 