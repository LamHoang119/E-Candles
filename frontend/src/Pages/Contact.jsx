import React from "react";
import "../CSS/Contact.css";
import contact_img_1 from "../Components/Assets/contact-img-1.png";
import contact_img_2 from "../Components/Assets/contact-img-2.png";
import contact_img_3 from "../Components/Assets/contact-img-3.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cae5a2e9-6521-43ff-a50a-40fab5720eb1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-page">
      <div className="get-in-touch">
        <img src={contact_img_1} alt="" />
        <div className="get-in-touch-col-2">
          <h1>GET IN TOUCH</h1>
          <div className="get-in-touch-item">
            <div>
              <h2>Opening Hours</h2>
              <p>Mon - Fri: 8am - 8pm</p>
              <p>​​Saturday: 9am - 7pm</p>
              <p>Sunday: 9am - 8pm</p>
            </div>
            <div>
              <h2>Address</h2>
              <p>
                500 Terry Francine Street San Francisco, CA 94158 123-456-7890
              </p>
            </div>
          </div>
          <div className="mail">info@mysite.com</div>
        </div>
      </div>
      <div className="contact">
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
            />
            <label>Write your messages here</label>
            <textarea
              name="message"
              rows="6"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit now
            </button>
          </form>
          <span>{result}</span>
        </div>
        <img src={contact_img_2} alt="" />
      </div>
      <img className="cut-candles" src={contact_img_3} alt="" />
    </div>
  );
};

export default Contact;
