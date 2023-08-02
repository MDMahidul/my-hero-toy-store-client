import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Login = () => {
  const [errors,setErrors] = useState('');
    return (
      <div className="container mx-auto mt-2 mb-5">
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center ">
              <img
                className="w-3/4 mx-auto"
                src="https://img.freepik.com/premium-vector/illustration-cartoon-female-user-entering-login_241107-682.jpg"
                alt=""
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl font-bold text-center">Login now</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      Do not have an account?
                      <Link
                        to="/register"
                        className="text-red-600 font-semibold link link-hover"
                      >
                        Register
                      </Link>
                    </span>
                  </label>
                </div>
                <span className="label-text-alt text-center text-red-600">
                  {errors}
                </span>
                <div className="form-control mt-2">
                  <button className="my-btn">Login</button>
                </div>
                <div className="divider">
                  <span className="text-xs">OR Sign In With Google</span>
                </div>
                <div className="text-center">
                  <button className="rounded-full bg-blue-600 text-white p-2 hover:scale-110 transition-all">
                    <FaGoogle></FaGoogle>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;