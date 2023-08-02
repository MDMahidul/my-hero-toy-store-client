import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MyToys = () => {
     const toys = useLoaderData();
     return (
       <div className="container mx-auto px-4">
         <h1 className="text-center py-4 font-bold text-red-600 text-3xl">
           My Toys
         </h1>
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
                       className="btn bg-red-600 text-white hover:bg-red-800 text-xs btn-sm"
                     >
                       Update
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

export default MyToys;