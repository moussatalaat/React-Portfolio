import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Select from "react-select";

const CheckBox = (props) => {
  console.log(props);
  // const [checked, setchecked] = useState(false);
  //   useEffect(() => {
  //     props.ischecked = checked;
  //   }, [checked]);
  return (
    <input
      type="checkbox"
      name="languages"
      checked={props.checked}
      onChange={props.onChange}
      value={props.name}
    />
  );
};

const SignUp = () => {
  const [checked, setchecked] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    watch,
    validate,
    formState: { errors },
  } = useForm();

  const checkBoxValues = [
    {
      name: "JavaScript",
      ischecked: false,
    },
    {
      name: "HTML",
      ischecked: false,
    },
    {
      name: "CSS",
      ischecked: false,
    },
    {
      name: "Bootstrap",
      ischecked: false,
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="h-100 d-flex justify-content-center">SignUp</h1>
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
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter you username"
              {...register("username", {
                required: true,
              })}
            />
            {errors?.username?.type === "required" && (
              <p className="font-weight text-danger mt-2">
                UserName is required
              </p>
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
              <p>Password "minLength" is 6</p>
            )}
            {errors?.password?.type === "maxlength" && (
              <p>Password "maxLength" is 12</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter you password again please"
              {...register("confirmpassword", {
                required: true,
                minLength: 6,
                maxLength: 12,
                validate: (value) => value === watch("password"),
              })}
            />
            {errors?.confirmpassword?.type === validate && (
              <p className="font-weight text-danger mt-2">
                Password isn't matched
              </p>
            )}
            {errors?.confirmpassword?.type === "required" && (
              <p className="font-weight text-danger mt-2">
                Password is required
              </p>
            )}
            {errors?.confirmpassword?.type === "minlength" && (
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

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Select your FrameWork</Form.Label>
            <Controller
              name="select"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" },
                  ]}
                  isMulti
                />
              )}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Select your Technologies</Form.Label>
            <div {...register("languages")}>
              {checkBoxValues.map((checkbox, index) => {
                return (
                  <CheckBox
                    name={checkbox.name}
                    ischecked={checked}
                    key={index}
                    onChange={() => {
                      setchecked(!checked);
                    }}
                  />
                );
              })}
            </div>
          </Form.Group>
          <Button className="mt-5" variant="primary" type="submit">
            SignUp
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
