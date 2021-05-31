import React from "react";
import useForm from "../../utils/useForm";
import validate from "../../utils/validateInfo";
import "./login.css";

const FormLogin = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);
  return (
    <form className="forms" onSubmit={handleSubmit}>
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
      <button className="form-input-btn" type="submit">
        Signup
      </button>
    </form>
  );
};

export default FormLogin;
