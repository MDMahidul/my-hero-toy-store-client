import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hook/useTitle";

const MyToys = () => {
  useTitle("my toys");
  const { user } = useContext(AuthContext);
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this data!!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://my-hero-server.vercel.app/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your data has been deleted Successfully!!!.",
                "success"
              );
              const remaining = toys.filter((toy) => toy._id !== _id);
              setToys(remaining);
            }
          });
      }
    });
  };
  const handleAscendingOrder = () => {
    fetch(`https://my-hero-server.vercel.app/ascending/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };
  const handleDescendingOrder = () => {
    fetch(`https://my-hero-server.vercel.app/descending/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };
  return (
    <div className="container mx-auto px-4 mt-5 mb-20">
      <h1 className="text-center py-4 font-bold text-red-600 text-3xl">
        My Toys
      </h1>
      <div className="my-2">
        <button
          onClick={handleAscendingOrder}
          className="btn bg-red-600 text-white hover:bg-red-800 text-xs btn-sm mr-2"
        >
          Ascending{" "}
        </button>
        <button
          onClick={handleDescendingOrder}
          className="btn bg-red-600 text-white hover:bg-red-800 text-xs btn-sm"
        >
          Descending{" "}
        </button>
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
                    to={`/update/${toy._id}`}
                    className="btn bg-red-600 text-white hover:bg-red-800 text-xs btn-sm mr-2"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn bg-red-600 text-white hover:bg-red-800 text-xs btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
