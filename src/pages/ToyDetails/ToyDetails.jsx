import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    const {toyName,sellerName,photourl,sellerEmail,price,rating,quantity,description,category} = toy;
    return (
      <div className='container mx-auto px-4 my-6 '>
        <div className="hero  bg-base-100">
          <div className="hero-content flex-col lg:flex-row lg:justify-start lg:gap-10">
            <img
              src={photourl}
              className="lg:w-1/2 rounded-lg shadow-2xl"
            />
            <div>
              <p className='text-3xl font-bold text-red-600 my-2'>{toyName}</p>
              <p className="text-base"><span className='font-bold text-red-600'>Seller: </span>{sellerName}</p>
              <p className="text-base"><span className='font-bold text-red-600'>Email: </span>{sellerEmail}</p>
              <p className="text-base"><span className='font-bold text-red-600'>Price: </span>${price}</p>
              <p className="text-base"><span className='font-bold text-red-600'>Rating: </span>{rating}</p>
              <p className="text-base"><span className='font-bold text-red-600'>Available Quantiry: </span>{quantity}</p>
              <p className="text-base"><span className='font-bold text-red-600'>Description: </span>{description}</p>
              <Link to='/alltoys' className='my-btn my-6'>Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ToyDetails;