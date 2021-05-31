import { useState, useEffect } from "react";

const useForm = (validateInfo) => {
  // const { validate, submitForm } = props;
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
    setErrors(validateInfo(values));
    // submitForm(true);
  };

  return { values, errors, handleChange, handleSubmit };
};

export default useForm;
