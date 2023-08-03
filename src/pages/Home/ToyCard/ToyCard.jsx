import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import ToyDetails from "../../ToyDetails/ToyDetails";

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { _id, toyName, photourl, rating, price } = toy;
  const navigate = useNavigate();

  const handleDetails = (_id) => {
    if (user?.email) {
      navigate(`/details/${_id}`);
    } else {
      Swal.fire({
        title: "Do you wan to see details?",
        text: "Then please login first!!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sure",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <div className="mb-4 card bg-base-100 shadow-xl">
        <figure>
          <img className="w-1/2" src={photourl} alt="Shoes" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title text-2xl">{toyName}</h2>
          <p className="text-xl">
            <span className="text-red-600 font-bold">Price: </span>
            {price}$
          </p>
          <p className="text-xl">
            <span className="text-red-600 font-bold">Rating: </span>
            {rating}
          </p>
          <div className="card-actions justify-end">
            <button className="my-btn" onClick={() => handleDetails(_id)}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
