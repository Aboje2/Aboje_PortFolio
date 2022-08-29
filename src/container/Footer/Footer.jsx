import React, { useState } from "react";
import { images } from "../../constant";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./Footer.scss";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [values, setValues] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { name, message, email } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    setIsLoading(false);
  };

  return (
    <>
      <h2 className="head-text">Take a Coffee and Chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="Email" />
          <a href="mailto:abojelar@yahoo.com" className="p-text">
            Abojelar@yahoo.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="Mobile" />
          <a href="tel: +23408068156129" className="p-text">
            +23408068156129
          </a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="p-text"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="app__flex">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="p-text"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            value={message}
            className="p-text"
          />
        </div>
        <button type="button" onClick={handleSubmit} className="p-text">
          {!isLoading ? "Send Message" : "Sending..."}
        </button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
{
  /* <div>
  <h3 className="head-text">Thank You for getting in touch</h3>
</div>; */
}
