import React from "react";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-9/12 mx-auto my-10  ">
      <div className=" bg-base-200 backgrounds">
        <div className="">
            <div>
                <h1 className="text-center text-3xl font-bold pt-3">Contact Us</h1>
                <div className="flex items-center justify-center text-2xl">
                    <FaFacebook/>
                    <FaInstagram  className="ml-2"/>
                    <FaTwitter  className="ml-2"/>
                </div>
            </div>
          <div className="card-body w-9/12 mx-auto ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-semibold ">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered rounded-md text-xl w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-semibold">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered rounded-md w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-semibold">
                  Message
                </span>
              </label>
              <textarea
                placeholder="Message"
                className="textarea rounded-md text-xl textarea-bordered textarea-lg w-full h-72"></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary rounded-md font">
                Send Message
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
