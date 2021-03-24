import React from 'react';
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';
// import * as Yup from 'yup';

const signInForm = () => {
  <Formik
  intialValues = {{email: "", password: ""}}
  onChange={(values, { setSubmitting}) => {
    console.log("Submitting Form")
  }}
  validate = { values => {
    let errors = {};
    if(!values.email){
      errors.email = "Required";
    }else if (!EmailValidator.validate(values.email)){
      errors.email = "Invalid Email Address"
    }

    if(!values.password){
      errors.password = "Required"
    }else if(values.password.length < 10){
      errors.password ="Password must be more than 10 character"
    }else if(!passwordRegex.tesr(values/password)){
      errors.password = "Invalid password"
    }
    return errors;
  }}
  >
    {props => {
      const {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit
      } = props;
    }}
    return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Username or Email</label>
      <input 
        name="email"
        type="text"
        placeholder="Enter email Address"
        value={values.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input 
        name="password"
        type="password"
        placeholder="************"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
      <button type="submit">Sign in with faceBook</button>
    </form>
    )
  </Formik>
};

export default signInForm;