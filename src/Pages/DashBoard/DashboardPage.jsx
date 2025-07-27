// AdminDashboard.js – Bootstrap version with polished UI
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLh7LOnZs_gvCo2Zq7JSWa3Wg5AQFwqBIt0tHM2-YU7bFNqrbwRbI6ayx7s_8rFaOEGUm_dKZpC2IH9CL2KCH7FnltBkj0aGzSD0gL69zLJLVKuQGUPAqDbsANZRLkiYyV-mALOBEuVb1Urm_7N86UlZr98V2Qtrm3PAktfS7YHABIOkPhP5IlQvASNTpz04yiuCylLRhzcaRE6lEmmg_cRGOeewi3j5H9nEX-Kah_DQZEoQe2YowEqLAVEjU669xwe6UhUFXW3ekQ4b4KSg-6K8b2RHnXetGmIZpZ9p&lib=Mj8M06WZAZMmD2WibGf3yRnv43jEim-T7'
        );
        const data = await res.json();

        const usersSheet = Array.from(
          new Map(data.filter(row => row.name).map(row => [row.name.trim(), row])).values()
        );
        const commentsSheet = data.filter(row => row.comment);

        setUsers(usersSheet);
        setComments(commentsSheet);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, []);

  const savedName = localStorage.getItem("studentName");
  if (savedName !== "aya") {
    return <Navigate to="/blocked" />;
  }

  return (
    <div className="container py-1">
      <div className="card shadow-lg border-0 mb-5">
        <div className="card-body text-center bg-primary text-white">
          <h1 className="card-title mb-0">📊 Admin Dashboard</h1>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Visitors</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">{users.length}</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Comments</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">{comments.length}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow mb-5">
        <div className="card-header bg-info text-white">👥 Visitor List</div>
        <div className="card-body table-responsive">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Group</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.group}</td>
                  <td>{u.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-header bg-warning text-white">💬 Comments List</div>
        <div className="card-body table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Date</th>
                <th>Group</th>
                <th>Lesson</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((c, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{c.name}</td>
                  <td>{c.date}</td>
                  <td>{c.group}</td>
                  <td>{c.lesson}</td>
                  <td>{c.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
