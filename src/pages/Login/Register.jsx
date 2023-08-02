import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Register = () => {
    const [errors, setErrors] = useState("");
    return (
      <div className=" min-h-screen bg-base-100 my-5">
        <div className="hero-content text-center">
          <div className="lg:w-1/2">
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl font-bold text-center">Register now</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Email <span className="text-red-600 font-bold">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="photo url"
                    className="input input-bordered"
                    defaultValue="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Password<span className="text-red-600 font-bold"> *</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      Do you have an account?
                      <Link
                        to="/login"
                        className="text-red-600 font-semibold link link-hover"
                      >
                        Login
                      </Link>
                    </span>
                  </label>
                </div>
                <span className="label-text-alt text-center text-red-600">
                  {errors}
                </span>
                <div className="form-control mt-2">
                  <button className="my-btn">Submit</button>
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

export default Register;