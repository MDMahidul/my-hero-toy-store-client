import React from 'react';

const UpdateToy = () => {
    const handleUpdate=(e)=>{

        e.preventDefault()
    }
    
    return (
      <div>
        <form onSubmit={handleUpdate}>
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
                Password <span className="text-red-600 font-bold">*</span>
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
          </div>
          <div className="form-control mt-2">
            <button className="my-btn">Update</button>
          </div>
        </form>
      </div>
    );
};

export default UpdateToy;