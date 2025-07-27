import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'
export default function Navbar() {
  const [name, setName] = useState('');
  const [storedName, setStoredName] = useState('');
  const [selectedGroup, setSelectedGroup] = useState("");
  useEffect(() => {
    const savedName = localStorage.getItem('studentName');
    if (savedName) {
      setStoredName(savedName);
    }
  }, []);

  const handleLogin = () => {
  if (name.trim() !== '' && selectedGroup !== '') {
    // 1. حفظ في localStorage
    localStorage.setItem('studentName', name);
    setStoredName(name);
    localStorage.setItem('studentgroup', selectedGroup);
    setSelectedGroup(selectedGroup);

    // 2. إرسال البيانات إلى Google Form
    const formData = new FormData();
    formData.append("entry.316113948", name);
    formData.append("entry.907231461", selectedGroup);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfikHJrjCfsqGuDW7yUFxRzRsyAbs8545Hwi2bU9ex9mA5ykQ/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).finally(() => {
      // 3. Reload regardless
      window.location.reload();
    });
  }
};

  const handleLogout = () =>{
    localStorage.removeItem("studentName")
      localStorage.removeItem("studentgroup")
    window.location.href = "/";
  }
 
  return (
<nav className="navbar container d-flex justify-content-between align-items-center px-3">
  <Link to={"/"}>
    <div className="navbar-brand fw-bold text-primary fs-4">
      <img src={logo} alt="Logo" width="100" height="100" />
    </div>
  </Link>

  <div className="d-flex flex-column flex-md-row align-items-center gap-2">
    {storedName ? (
      <div>
        <span className="fw-bold fs-4 text-primary">{storedName}  <i class="fa-solid fa-right-from-bracket text-danger mx-5 "  style={{cursor:"pointer"}} onClick={handleLogout}></i> </span>
        {storedName.toLowerCase() === 'admin' && (
          <Link to="/admindashboard" className="ms-3">
            <i className="fa-regular fa-user fs-5"></i>
          </Link>
        )}
      </div>
    ) : (
      <>
        <input
          type="text"
          className="form-control"
          placeholder="Student Name"
        value={name} onChange={(e) => setName(e.target.value)} required
          style={{ minWidth: "150px" }}
        />

        <select
          className="form-select"
           value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)} required 
          style={{ minWidth: "120px" }}
        >
          <option value="">Select Group</option>
          <option value="A">Group A</option>
          <option value="B">Group B</option>
          <option value="C">Group C</option>
          <option value="D">Group D</option>
        </select>

        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </>
    )}
  </div>
</nav>

  );
}
