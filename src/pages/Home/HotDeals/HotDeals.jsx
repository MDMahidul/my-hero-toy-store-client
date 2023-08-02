import React from 'react';

const HotDeals = () => {
    return (
      <div className="container mx-auto bg-base-100 shadow-md rounded-md pb-5 my-20">
        <div className="carousel w-full">
          <div
            id="slide1"
            className="carousel-item relative justify-center w-full"
          >
            <div className="flex flex-col items-center lg:flex-row">
              <div className="text-center">
                <p className="text-3xl font-bold lg:mb-5 text-blue-800">
                  New Arrival
                </p>
                <p>Collect your favourite toy today</p>
                <button className="my-btn my-4">Buy Now</button>
              </div>
              <img
                src="https://i.ibb.co/wQr4cnQ/AABG2-AABY163-1-5000x.webp"
                className="w-80"
              />
              <div>
                <p className="font-bold text-2xl text-red-600">
                  BATMAN MULTIVERSE
                </p>
                <p className="w-52 text-sm my-4">
                  <span className="font-bold">Description: </span>
                  Embark on a thrilling journey through the Multiverse with this
                  incredibly detailed 7" scale Batman (Multiverse) figure.
                </p>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative justify-center w-full"
          >
            <div className="flex flex-col items-center lg:flex-row">
              <div className="text-center">
                <p className="text-3xl font-bold lg:mb-5 text-blue-800">
                  New Arrival
                </p>
                <p>Collect your favourite toy today</p>
                <button className="my-btn my-4">Buy Now</button>
              </div>
              <img
                src="https://i.ibb.co/c6KT2Gy/AAAI367-AABU195-1-400x.webp"
                className="w-80"
              />
              <div>
                <p className="font-bold text-2xl text-red-600">ANT-MAN LEGO</p>
                <p className="w-52 text-sm my-4">
                  <span className="font-bold">Description: </span>
                  This set features the star of Marvel Studios' Ant-Man and the
                  Wasp: Quantumania, Ant-Man, in a fully articulated and
                  movie-accurate construction figure.
                </p>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative justify-center w-full"
          >
            <div className="flex flex-col items-center lg:flex-row">
              <div className="text-center">
                <p className="text-3xl font-bold lg:mb-5 text-blue-800">
                  New Arrival
                </p>
                <p>Collect your favourite toy today</p>
                <button className="my-btn my-4">Buy Now</button>
              </div>
              <img
                src="https://i.ibb.co/dbjxx1s/AADM365-AAEF322-1-2000x.webp"
                className="w-80"
              />
              <div>
                <p className="font-bold text-2xl text-red-600">
                  REAL SPIDERMAN
                </p>
                <p className="w-52 text-sm my-4">
                  <span className="font-bold">Description: </span>
                  The charismatic web-shooter-hero faces one of the darkest and
                  most tragic moments of his life, despite the fact that he is
                  still a teenager but with plenty of experience acting
                  alongside the Avengers.
                </p>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HotDeals;