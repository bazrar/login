export default function validateInfo(values) {
  let errors = {};

  if (!values.username) {
    errors.username = "Username required";
  } else if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password is required";
  } else if (!(values.confirmPassword === values.password)) {
    errors.confirmPassword = "Password do not match";
  }

  return errors;
}
