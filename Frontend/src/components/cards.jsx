import React from "react";
import { FaRupeeSign } from "react-icons/fa";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 p-3 my-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              className="w-50 h-50 md:w-80 h-80 rounded"
              src={item.image}
              alt="book"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">
                <FaRupeeSign />
                {item.price}
              </div>
              <div className="badge badge-outline rounded-full border-[2px] px-2 py-1 hover:bg-pink-500 hover:text-white duration:200 cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
