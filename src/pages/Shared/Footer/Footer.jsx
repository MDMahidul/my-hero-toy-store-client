import React from 'react';
import logo from '../../../assets/logo.png'
import { FaFacebook, FaInstagram, FaLocationDot, FaTiktok, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className=" bg-gray-200">
        <footer className="footer py-10 px-4 text-base-content container  mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div>
            <img className="w-40" src={logo} alt="" />
            <p className=" lg:w-full text-gray-600">
              Welcome to MY HERO, your ultimate destination for all things
              superhero!
            </p>
            <p className="flex gap-1 text-gray-600">
              <FaLocationDot className="text-2xl"></FaLocationDot>
              House#05 (8th Floor), Road# 20, Baridhara, Block J, Dhaka - 1212.
            </p>
          </div>
          <div className="lg:ml-20 text-gray-600">
            <span className="footer-title">Quick Links</span>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/alltoys" className="link link-hover">
              All Toys
            </Link>
            <Link to="/blogs" className="link link-hover">
              Blogs
            </Link>
          </div>
          <div className="lg:ml-4 text-gray-600">
            <span className="footer-title">Follow Us</span>
            <a className="link link-hover flex items-center gap-2">
              <FaFacebook></FaFacebook> Facebook
            </a>
            <a className="link link-hover flex items-center gap-2">
              <FaInstagram></FaInstagram> Instagram
            </a>
            <a className="link link-hover flex items-center gap-2">
              <FaYoutube></FaYoutube> Youtube
            </a>
            <a className="link link-hover flex items-center gap-2">
              <FaTiktok></FaTiktok> Tiktok
            </a>
          </div>
          <div className="lg:ml-[-30px] text-gray-600">
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-70">
              <label className="label">
                <span className="label-text text-gray-600">
                  Enter your email address
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered w-full pr-16 bg-white"
                />
                <button className="my-btn hover:bg-red-800 absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer footer-center py-8 bg-gray-200 border-t-2 text-base-content container mx-auto px-4">
          <div>
            <p>Copyright © 2023 - All right reserved by MY HERO</p>
          </div>
        </footer>
      </div>
    );
};

export default Footer;