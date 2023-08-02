import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
      const navigate = useNavigate();

    const toy = useLoaderData();
    const {_id,toyName,price,quantity,description}=toy;
    const handleUpdate=(e)=>{
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateData = {price,quantity,description};
        /* console.log(updateData); */
        fetch(`http://localhost:5000/update/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "success",
                text: "Data updated successfully!",
                icon: "success",
                confirmButtonText: "OK",
                didClose:()=>{
                    navigate(-1);
                }
              });
            }
          });
    }

    
    
    return (
      <div className="container mx-auto my-12">
        <div className="card  w-1/2 mx-auto shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Update Toy Data</h1>
            <p className="text-center text-xl font-semibold text-red-600">
              For: {toyName}
            </p>
            <form onSubmit={handleUpdate}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price $</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  name="price"
                  defaultValue={price}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="quantity"
                  className="input input-bordered"
                  name="quantity"
                  defaultValue={quantity}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="description"
                  className="input input-bordered"
                  name="description"
                  defaultValue={description}
                  required
                />
              </div>
              <span className="label-text-alt text-center text-red-600">
                {}
              </span>
              <div className="form-control mt-4">
                <button onClick={()=>handleUpdate(_id)} className="my-btn">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateToy;