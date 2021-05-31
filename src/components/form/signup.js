import React from "react";
import useForm from "../../utils/useForm";
import validateInfo from "../../utils/validateInfo";
import "./form.css";

const Signup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    validateInfo,
    submitForm
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.{" "}
        </h1>
        <div className="form-inputs">
          <label htmlFor="userName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-input"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm password
          </label>
          <input
            type="password"
            className="form-input"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Enter your password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Signup
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default Signup;
