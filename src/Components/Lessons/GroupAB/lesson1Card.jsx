import React from 'react'
import { FileText, Video } from 'lucide-react';

const Lesson1Card = ({title, type}) => {
  
  return (
<div 
  className="card d-flex flex-column align-items-center text-center mb-3 p-3 shadow-sm rounded" 
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