import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxZXeYYlR3tI1M3-xhf07vjRacM0RSe_f5BrwQT0sVI_hcIkyrL3-H6po0z2IVif3xGHw/exec') // Replace with your link
      .then(res => res.json())
      .then(data => setResponses(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-5">
      <h2>Form Submissions</h2>
      {responses.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              {Object.keys(responses[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {responses.map((entry, index) => (
              <tr key={index}>
                {Object.values(entry).map((val, i) => (
                  <td key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
