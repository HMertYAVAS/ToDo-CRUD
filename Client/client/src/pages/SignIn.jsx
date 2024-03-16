import { Alert, Button, Checkbox, Label, Spinner, TextInput } from 'flowbite-react';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  /*   console.log(formData); */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/todo");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='grid grid-cols-1 justify-items-center  p-8 mt-16'>
      <h1 className='mb-16 text-3xl'>Sign In</h1>
      {console.log(formData)}
      <form className="flex max-w-md w-full flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput id="email" type="email" placeholder="name@todo.com" onChange={handleChange} required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" type="password" onChange={handleChange} required />
        </div>
        {/* <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div> */}
        <Button
          type="submit"
          gradientDuoTone={"purpleToBlue"}
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner size={"sm"} />
              <span className="pl-3">Loading...</span>
            </>
          ) : (
            "Sign In"
          )}
        </Button>
        <div>
          <span className="mr-3">Dont you have a account?</span>
          <Link
            to={"/sign-up"}
            className="text-blue-600 font-semibold text-sm"
          >
            Sign Up
          </Link>
          {errorMessage && (
            <Alert className="mt-5" color={"failure"}>
              {errorMessage}
            </Alert>
          )}
        </div>
      </form>
    </div>
  );
}
