import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { regExp, validValue } from "../../Utils/validation";
import "../FormStyles.css";
import { loginUser } from "../../Services/authService";
import { Alert, Container, Button } from "@mui/material";

const LoginForm = () => {
  const { push } = useHistory();
  const { email } = regExp;

  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });
  const [hasErrors, setHasErrors] = useState(false);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [authorization, setAuthorization] = useState(true);

  const handleChange = (e) => {
    if (validValue(email, e.target.value)) {
      setErrors("");
      setInitialValues({ ...initialValues, email: e.target.value });
      setHasErrors(false);
    } else {
      setErrors("Dato Obligatorio");
      setHasErrors(true);
    }
  };
  const handlePasswordChange = (e) => {
    if (e.target.name === "password") {
      setInitialValues({ ...initialValues, password: e.target.value });
      setHasErrors(false);
    }
  };
  const loginRequest = async () => {
    try {
      const data = await loginUser(initialValues);
      console.log("Esta es la data en el form", data.data.error);
      if (data.data.error === "No token") {
        setAuthorization(false);
      } else {
        setUserName(data.user.name);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { token } = await loginRequest();
    console.log("TOKEN", token);
    if (!token) {
      localStorage.setItem("token", token);
      localStorage.setItem("userName", "Juan99");
    }
    setLoading(true);
  };
  if (!authorization) {
    return <h1>No pudiste obtener el token</h1>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          name="email"
          value={initialValues.name}
          onChange={handleChange}
          placeholder="Enter email"
        ></input>
        {errors ? (
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Alert severity="error">{errors}</Alert>
          </Container>
        ) : (
          <p></p>
        )}
        <input
          className="input-field"
          type="password"
          name="password"
          value={initialValues.password}
          onChange={handlePasswordChange}
          placeholder="Ingrese su contrase??a"
        />
        {hasErrors || loading ? (
          <Button
            variant="outlined"
            color="buttondelete"
            type="submit"
            disabled
          >
            Ingresar
          </Button>
        ) : (
          <Button variant="contained" type="submit">
            Ingresar
          </Button>
        )}
        {/* {loading && <Alert severity="success">{userName}</Alert>} */}
      </form>
    </div>
  );
};

export default LoginForm;
