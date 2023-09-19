import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const AddToy = () => {
  useTitle("add a toy");
  const [errors, setErrors] = useState("");
  const { user } = useContext(AuthContext);

  const handleToyUpload = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const photourl = form.photourl.value;
    const description = form.description.value;

    const upinfo = {
      toyName,
      sellerName,
      sellerEmail,
      category,
      price,
      rating,
      quantity,
      photourl,
      description,
    };
    /*  console.log(upinfo); */
    fetch("https://my-hero-server.vercel.app/upload", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Toy added successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
      });
  };
  return (
    <div className=" min-h-screen  my-8">
      <div className="hero-content text-center">
        <div className="lg:w-1/2">
          <div className="card flex-shrink-0 w-full  shadow-2xl ">
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center text-red-600">Add A Toy</h1>
              <form onSubmit={handleToyUpload}>
                <div className="grid grid-col-1 lg:grid-cols-2 gap-4  ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Toy Name
                        <span className="text-red-600 font-bold"> *</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="enter toy name"
                      className="input input-bordered bg-white"
                      name="toyName"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Seller Name
                        <span className="text-red-600 font-bold"> *</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered bg-white"
                      name="sellerName"
                      required
                      defaultValue={
                        user?.displayName ? user?.displayName : "John Doe"
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Seller Email
                        <span className="text-red-600 font-bold"> *</span>
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="enter seller name"
                      className="input input-bordered bg-white"
                      name="sellerEmail"
                      defaultValue={user?.email}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Category
                        <span className="text-red-600 font-bold"> *</span>
                      </span>
                    </label>
                    <select
                      className="select select-bordered bg-white"
                      required
                      name="category"
                    >
                      <option disabled>Select A Toy Category ?</option>
                      <option value="dc">DC</option>
                      <option value="marvel">Marvel</option>
                      <option value="ben-ten">Ben Ten</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Price
                        <span className="text-red-600 font-bold"> *</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="enter price"
                      className="input input-bordered bg-white"
                      name="price"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Rating
                        <span className="text-red-600 font-bold"> *</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="enter ratings"
                      className="input input-bordered bg-white"
                      name="rating"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Available Quantity
                        <span className="text-red-600 font-bold"> *</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="enter quantity"
                      className="input input-bordered bg-white"
                      name="quantity"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Photo URL
                        <span className="text-red-600 font-bold"> *</span>
                      </span>
                    </label>
                    <input
                      type="url"
                      placeholder="photo url"
                      className="input input-bordered bg-white"
                      name="photourl"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Description
                      <span className="text-red-600 font-bold"> *</span>
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered bg-white"
                    placeholder="description"
                    required
                    name="description"
                  ></textarea>
                </div>
                <span className="label-text-alt text-center text-red-600">
                  {errors}
                </span>
                <div className="form-control mt-4">
                  <button className="my-btn">Upload</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
