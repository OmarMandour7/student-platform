import React, { useState } from "react";

const GoogleFormSender = () => {
  const [form, setForm] = useState({
    name: "",
    comment: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfikHJrjCfsqGuDW7yUFxRzRsyAbs8545Hwi2bU9ex9mA5ykQ/formResponse";

    const formData = new FormData();
    formData.append("entry.316113948", form.name);
    formData.append("entry.204008115", form.comment);

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors", // مهم جدًا
      body: formData,
    })
      .then(() => {
        setSuccess(true);
        setForm({ name: "", comment: "" });
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((err) => {
        alert("فشل الإرسال ❌");
        console.error(err);
      });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "2rem" }}>
      <h2>📝 إرسال بيانات للـ Google Form</h2>
      <form onSubmit={handleSubmit}>
        <label>الاسم:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <label>الكومنت:</label>
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary">
          إرسال
        </button>
        {success && <p style={{ color: "green" }}>✅ تم إرسال البيانات بنجاح</p>}
      </form>
    </div>
  );
};

export default GoogleFormSender;
