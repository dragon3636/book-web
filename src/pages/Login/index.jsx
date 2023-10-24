import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, redirect, useNavigate, useNavigation } from 'react-router-dom';
export async function action({ request, params }) {
  const formData = await request.formData();
  const login = Object.fromEntries(formData);
  console.log(login);
  return redirect(`/`);
}

import { login } from '../../actions/auth';
import { useForm } from 'react-hook-form';

const Login = () => {
  // let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const firstErrorKey = Object.keys(errors).find((key) => errors[key]);
    if (firstErrorKey) {
      document.querySelector(`input[name="${firstErrorKey}"]`)?.focus();
    }
  }, [Object.keys(errors)]);
  const form = useRef();
  const checkBtn = useRef();

  const navigation = useNavigation();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const handleLogin = (data) => {
    console.log('data', data);
    const { username, password } = data;
    // e.preventDefault();
    // if (checkBtn.current.context._errors.length === 0) {
    dispatch(login(username, password))
      .then(() => {
        redirect('/');
      })
      .catch(() => {
        // setLoading(false);
      });
    // } else {
    //   // setLoading(false);
    // }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">LogIn</span>
        </h2>
        <form onSubmit={handleSubmit(handleLogin)} ref={form}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              <i className="fas fa-envelope mr-2"></i>Email
            </label>
            <div>
              <input
                id="username"
                type="text"
                name="username"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your username"
                {...register('username', { required: 'Username is required' })}
              />
              <p>{errors.username?.message}</p>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              <i className="fas fa-lock mr-2"></i>Password
            </label>
            <div>
              <input
                id="password"
                type="password"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Min length is 8' },
                })}
              />
              <p>{errors.password?.message}</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              ref={checkBtn}
              disabled={navigation.state === 'loading'}
            >
              {/* {loading && <span className="spinner-border spinner-border-sm"></span>} */}
              LogIn
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-gray-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don`t have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
        <div className="mt-4">
          <p className="text-center text-gray-600">Or log in with:</p>
          <div className="flex justify-center mt-2">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
