import React from 'react'
import { FileText, Video } from 'lucide-react';

const Lesson1Card = ({title, type , id ,char}) => {

    const isSeen = (id) => {
      const watched = JSON.parse(localStorage.getItem(`watchedLessons${char}`)) || [];
    return watched.includes(id);
  };
  return (
<div 
  className={`card d-flex flex-column align-items-center text-center mx-2 my-3 p-3 ${  isSeen(id) ? "shadow-seen" : "shadow-notseen"}  rounded`} 
  style={{ width: 'auto', minWidth: '150px' }}
>
  <div className="mb-2">
    {type === 'pdf' ? (
      <FileText color="#66ba38ff" size={28} />
    ) : (
      <Video color="#DC3545" size={28} />
    )}
  </div>

  <h5 className="card-title mb-0 fs-4">{title}</h5>
</div>

    

  );
}

export default Lesson1Card