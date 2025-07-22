import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
  try {
    const res = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLh7LOnZs_gvCo2Zq7JSWa3Wg5AQFwqBIt0tHM2-YU7bFNqrbwRbI6ayx7s_8rFaOEGUm_dKZpC2IH9CL2KCH7FnltBkj0aGzSD0gL69zLJLVKuQGUPAqDbsANZRLkiYyV-mALOBEuVb1Urm_7N86UlZr98V2Qtrm3PAktfS7YHABIOkPhP5IlQvASNTpz04yiuCylLRhzcaRE6lEmmg_cRGOeewi3j5H9nEX-Kah_DQZEoQe2YowEqLAVEjU669xwe6UhUFXW3ekQ4b4KSg-6K8b2RHnXetGmIZpZ9p&lib=Mj8M06WZAZMmD2WibGf3yRnv43jEim-T7');
    const data = await res.json();

const usersSheet = Array.from(
  new Map(
    data
      .filter((row) => row.name) // تسجيل الدخول فقط
      .map((row) => [row.name.trim(), row]) // استخدم الاسم كمفتاح
  ).values()
);
    const commentsSheet = data.filter((row) => row.comment); // التعليقات

    setUsers(usersSheet);
    setComments(commentsSheet);
  } catch (err) {
    console.error("Error fetching data", err);
  }
};


    fetchData();
  }, [users]);
  return (
    <div className="container p-5 ">
      <h1 className=" text-center">📊 لوحة تحكم الإدارة</h1>

      {/* تسجيل الدخول */}
      <div className="mb-5">
        <h3>👥 عدد الزوار: {users.length}</h3>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>الاسم</th>
                <th>الجروب</th>
                <th>الوقت</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{u["name"]}</td>
                  <td>{u["group"]}</td>
                  <td>{u["date"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* الكومنتات */}
      <div>
        <h3>💬 عدد التعليقات: {comments.length}</h3>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>الاسم</th>
                <th>الوقت</th>
                <th>المجموعة</th>
                <th>الدرس</th>
                <th className="w-50">التعليقات</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((c, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{c["name"]}</td>
                  <td>{c["date"]}</td>
                  <td>{c["group"]}</td>
                  <td>{c["lesson"]}</td>
                  <td>{c["comment"]}</td>
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
