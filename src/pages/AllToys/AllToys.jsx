import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hook/useTitle";

const AllToys = () => {
  useTitle("all toys");
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.toyName.value;
    fetch(`https://my-hero-server.vercel.app/byname/${toyName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };
  return (
    <div className="container mx-auto px-4 mt-5 mb-20">
      <h1 className="text-center py-4 font-bold text-red-600 text-3xl">
        All Toys
      </h1>
      <div className="flex justify-center mb-4">
        <form onSubmit={handleSearch}>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search By Name"
                className="input input-bordered"
                name="toyName"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-200">
            <tr>
              <th>SL</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Category</th>
              <th>Price</th>
              <th> Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>{toy.toyName}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.category}</td>
                <td>$ {toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link
                    to={`/details/${toy._id}`}
                    className="btn bg-red-600 text-white hover:bg-red-800 text-xs btn-sm"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
