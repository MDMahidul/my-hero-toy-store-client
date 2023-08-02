import React from 'react';

const PhotoGallery = () => {
    return (
      <div className="container bg-base-100 mx-auto px-4 my-5 ">
        <h2 className="text-4xl font-bold text-red-600 text-center my-10 lg:pb-5">
          Heros Gallery
        </h2>
        <div className="-m-1 lg:flex lg:flex-wrap  md:-m-2">
          <div className="flex lg:w-1/2 flex-wrap">
            <div className="lg:w-1/2 p-1 md:p-2 ">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-lg"
                src="https://i.ibb.co/Q6P8GVZ/benten.png"
              />
            </div>
            <div className="lg:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-lg"
                src="https://i.ibb.co/fdDc7Jr/justicetoy-01.png"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-lg"
                src="https://i.ibb.co/hWCMVbm/justice-01.png"
              />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-lg"
                src="https://i.ibb.co/KXjY4B3/avenger-01.png"
              />
            </div>
            <div className="lg:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-lg"
                src="https://i.ibb.co/SmVLcKj/aventoy-01.png"
              />
            </div>
            <div className="lg:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-lg"
                src="https://i.ibb.co/XzjR7vm/xmen-01.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default PhotoGallery;