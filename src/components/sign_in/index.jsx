import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="h-100 d-flex justify-content-center">SignIn</h1>
      <div className="h-100 d-flex justify-content-center border p-3 w-50 mx-auto mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter you mail"
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="font-weight text-danger mt-2">Email is required</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter you password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors?.password?.type === "required" && (
              <p className="font-weight text-danger mt-2">
                Password is required
              </p>
            )}
            {errors?.password?.type === "minlength" && (
              <p className="font-weight text-danger mt-2">
                Password "minLength" is 6
              </p>
            )}
            {errors?.password?.type === "maxlength" && (
              <p className="font-weight text-danger mt-2">
                Password "maxLength" is 12
              </p>
            )}
          </Form.Group>
          <Button className="mt-5" variant="primary" type="submit">
            SignIn
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
