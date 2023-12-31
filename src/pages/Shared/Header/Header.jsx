import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
    const { user, userLogout } = useContext(AuthContext);
    const handleLogOut=()=>{
      userLogout()
        .then()
        .catch(error=>{
          console.log(error);
        })
    }
    return (
      <div className=" bg-pink shadow-md">
        <div className="navbar container mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <ActiveLink to="/">Home</ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/alltoys">All Toys</ActiveLink>
                </li>
                {user?.email ? (
                  <>
                    <li>
                      <ActiveLink to={`/mytoys/${user?.email}`}>My Toys</ActiveLink>
                    </li>
                    <li>
                      <ActiveLink to="/addtoy">Add A Toy</ActiveLink>
                    </li>
                  </>
                ) : (
                  ""
                )}
                <li>
                  <ActiveLink to="/blogs">Blogs</ActiveLink>
                </li>
                {user?.email ? (
                  <>
                    <div
                      className="tooltip tooltip-bottom"
                      data-tip={user.email}
                    >
                      <img
                        className="w-10 rounded-full border-red-600 border mr-2"
                        src={
                          user.photoURL
                            ? user.photoURL
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                        }
                        alt=""
                      />
                    </div>

                    <button onClick={handleLogOut} className="my-btn">
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="my-btn mr-2">
                      Login
                    </Link>
                    <Link to="/register" className="my-btn">
                      Register
                    </Link>
                  </>
                )}
              </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl ">
              <img className="lg:w-36 w-24" src={logo} alt="my-hero" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold ">
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/alltoys">All Toys</ActiveLink>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <ActiveLink to={`/mytoys/${user?.email}`}>My Toys</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink to="/addtoy">Add A Toy</ActiveLink>
                  </li>
                </>
              ) : (
                ""
              )}
              <li>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
              </li>
            </ul>
          </div>
          <div className="lg:navbar-end md:navbar-end lg:flex md:flex hidden">
            {user?.email ? (
              <>
                <div className="tooltip tooltip-bottom" data-tip={user.displayName ? user.displayName : 'user'}>
                  <img
                    className="w-10 rounded-full border-red-600 border mr-2"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                    }
                    alt=""
                  />
                </div>

                <button onClick={handleLogOut} className="my-btn">
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="my-btn mr-2">
                  Login
                </Link>
                <Link to="/register" className="my-btn">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Header;