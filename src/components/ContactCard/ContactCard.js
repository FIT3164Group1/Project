import "../../css/styles.css";
import React from "react";

const ContactCard = () => {
  return (
    <div className="p-4 shadow-2xl card bordered">
      <h1 className="text-center">Contact Us</h1>
      <p className="text-center">
        Feel free to contact us and we will get back to you as soon as possible.
      </p>
      <form action="" className="pt-5">
        <div className="flex flex-wrap">
          <div className="w-1/2 p-2">
            <div className="form-control">
              <label className="pl-2">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered bg-base-100"
              />
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="form-control">
              <label className="pl-2">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered bg-base-100"
              />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="form-control">
              <label className="pl-2">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Message"
                className="textarea textarea-bordered bg-base-100"
              />
            </div>
          </div>
        </div>
        <div className="justify-center card-actions">
          <div className="btn">Send email</div>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
