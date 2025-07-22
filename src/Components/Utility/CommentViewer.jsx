import React, { useEffect, useState } from 'react';

const CommentsViewer = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxblHn1BpeHQCJPJWM3wO0ZH-gce7Uq9U2GtOkPsBcRJd-iDmJbgbNK9x00bkEUxAuREg/exec') // استبدل بالرابط بتاعك
      .then(response => response.json())
      .then(data => {
        setComments(data);
      });
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-primary">Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment["Name"]}:</strong> {comment["Comment"]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsViewer;
