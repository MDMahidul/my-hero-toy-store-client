import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {userSignup, googleSignin} = useContext(AuthContext);
    const [errors, setErrors] = useState("");
     const navigate= useNavigate();
     const location= useLocation();
     const from= location.state?.from?.pathname || '/';

    const handleUserSignup=(e)=>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photourl = form.photourl.value;
      const email = form.email.value;
      const password = form.password.value;
      /* const userinfo = {name,photourl,email,password}
      console.log(userinfo); */

      if(password.length<6){
        setErrors('Password must be at least 6 digits...');
        return;
      }
      userSignup(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          setErrors('');
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate(from,{replace: true});
        })
        .catch(error=>{
          console.log(error);
          setErrors(error.message);
        })
    }

    const handleGoogleSingin=()=>{
      googleSignin()
        .then(result=>{
          console.log(result);
          Swal.fire({
            icon: "success",
            title: "Sign In Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        })
        .catch(error=>{
          console.log(error);
        })
    }
    return (
      <div className=" min-h-screen my-5">
        <div className="hero-content text-center">
          <div className="lg:w-1/2">
            <div className="card flex-shrink-0 w-full  shadow-2xl">
              <div className="card-body">
                <h1 className="text-3xl font-bold text-center">Register now</h1>
                <form onSubmit={handleUserSignup}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered bg-white"
                      name="name"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Email <span className="text-red-600 font-bold">*</span>
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered bg-white"
                      name="email"
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
                      className="input input-bordered bg-white"
                      defaultValue="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                      name="photourl"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Password
                        <span className="text-red-600 font-bold"> *</span>
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered bg-white"
                      name="password"
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
                </form>
                <div className="divider">
                  <span className="text-xs">OR Sign In With Google</span>
                </div>
                <div className="text-center">
                  <button onClick={handleGoogleSingin} className="rounded-full bg-blue-600 text-white p-2 hover:scale-110 transition-all">
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