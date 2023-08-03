import React from 'react';
import bannerimg from '../../../assets/img/header.png'

const Banner = () => {
    return (
      <div className="hero bg-base-100 min-h-screen  container mx-auto mt-2 px-6 lg:px-10">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <img
            src="https://www.superherotoystore.com/cdn/shop/files/Untitleddesign_855af409-f28b-4948-a860-870fad9b8f71_1600x.jpg?v=1685709560"
            className="lg:w-2/5 rounded-lg "
          />
          <div className="lg:text-left text-center">
            <div>
              <img
                className="w-80 mt-[-10px] lg:mx-0 mx-auto"
                src={bannerimg}
                alt=""
              />
            </div>
            <h1 className="text-5xl text-red-600 font-bold">MY HERO</h1>
            <p className="py-2">
              Get your favourite superhero now !!! And Become the superhero you
              want to be.Explore a vast collection of action figures,
              merchandise, and memorabilia from your favorite superheroes.
            </p>
            <button className="my-btn">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;