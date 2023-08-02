import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const [errors,setErrors] = useState('');
  const{userSignin,googleSignin}=useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleUserLogin=(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
     /* const userinfo = {email,password}
      console.log(userinfo);  */

      userSignin(email,password)
        .then(result=>{
          console.log(result.user);
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          setErrors('');
          navigate(from, { replace: true });
        })
        .catch(error=>{
          setErrors(error.message);
        })
  }
  const handleGoogleSingin = () => {
    googleSignin()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Sign In Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
                <form onSubmit={handleUserLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Email <span className="text-red-600 font-bold">*</span>
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Password{" "}
                        <span className="text-red-600 font-bold">*</span>
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      name="password"
                      required
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
                </form>
                <div className="divider">
                  <span className="text-xs">OR Sign In With Google</span>
                </div>
                <div className="text-center">
                  <button
                    onClick={handleGoogleSingin}
                    className="rounded-full bg-blue-600 text-white p-2 hover:scale-110 transition-all"
                  >
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