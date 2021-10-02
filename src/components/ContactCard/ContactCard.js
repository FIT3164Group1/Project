import "../../css/styles.css";
import React from "react";
import { useInput } from "../../hooks/input-hook";

const ContactCard = () => {
  const { bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: subject, bind: bindSubject, reset: resetSubject } = useInput(
    ""
  );
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(
      `mailto:lewislaqc1@gmail.com?subject=${subject}&body=${message}`
    );
    resetEmail();
    resetSubject();
    resetMessage();
  };

  return (
    <div className="p-4 shadow-2xl card bordered w-96 md:w-full">
      <h1 className="text-2xl text-center">Contact Us</h1>
      <p className="text-center">
        Feel free to contact us and we will get back to you as soon as possible.
      </p>
      <form action="" className="pt-5" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <div className="w-1/2 p-2">
            <div className="form-control">
              <label className="pl-2">
                <span className="label-text">Your email address</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered bg-base-100"
                {...bindEmail}
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
                {...bindSubject}
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
                {...bindMessage}
              />
            </div>
          </div>
        </div>
        <div className="justify-center card-actions">
          <button className="btn" type="submit" value="Submit">
            Send email
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
