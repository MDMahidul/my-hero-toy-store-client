import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
      const { error } = useRouteError();
    return (
      <div className=" py-10 bg-[#F0F0F0] min-h-screen">
        <div>
          <img
            className="w-2/5 mx-auto"
            src="https://cdn.dribbble.com/users/381530/screenshots/3949858/404.gif"
            alt=""
          />
        </div>
        <div className='text-center'>
          <p className="mb-4">{error.message}</p>
          <Link to="/" className="my-btn">
            Go Home
          </Link>
        </div>
      </div>
    );
};

export default Error;