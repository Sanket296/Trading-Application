import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const styles = `
.form_container {
  max-width: 460px;
  margin: 48px auto;
  padding: 28px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(2,6,23,0.08);
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}
.form_header {
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:18px;
}
.form_header h2 {
  margin:0;
  font-size:20px;
  color:#0d6efd;
  font-weight:700;
}
.auth_form .form_row {
  margin-bottom:14px;
  display:flex;
  flex-direction:column;
}
.auth_form label {
  font-size:13px;
  margin-bottom:6px;
  color:#374151;
}
.auth_form input {
  padding:10px 12px;
  border:1px solid #e5e7eb;
  border-radius:8px;
  font-size:14px;
  outline:none;
  transition:box-shadow .12s, border-color .12s;
}
.auth_form input:focus {
  border-color:#3b82f6;
  box-shadow:0 0 0 6px rgba(59,130,246,0.06);
}
.btn_primary {
  width:100%;
  padding:10px 12px;
  background:#0d6efd;
  color:#fff;
  border:none;
  border-radius:8px;
  font-weight:600;
  cursor:pointer;
  transition:background .12s;
}
.btn_primary:hover { background:#0b5ed7; }
.form_footer {
  margin-top:12px;
  text-align:center;
  font-size:14px;
  color:#6b7280;
}
.form_footer a { color:#0d6efd; text-decoration:none; font-weight:600; }
@media (max-width:480px) {
  .form_container { margin:24px 16px; padding:20px; }
}
`;

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        // "http://localhost:8000/login",
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
          window.location.href = process.env.REACT_APP_DASHBOARD_URL;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Login failed. Please try again.");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <>
      <style>{styles}</style>
      <div className="form_container">
        <div className="form_header">
          <h2>Login to TradeWave</h2>
        </div>
        <form onSubmit={handleSubmit} className="auth_form" noValidate>
          <div className="form_row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="you@domain.com"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form_row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
            />
          </div>
          <button type="submit" className="btn_primary">Sign in</button>
          <div className="form_footer">
            Don't have an account? <Link to={"/signup"}>Signup</Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;