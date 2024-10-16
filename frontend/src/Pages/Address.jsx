import React, { useContext } from "react";
import "../CSS/Address.css";
import { ShopContext } from "../Context/ShopContext";

const Address = () => {
  const {resetCart} = useContext(ShopContext);

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("On Ordering...");
    const formData = new FormData(event.target);

    formData.append("access_key", "cae5a2e9-6521-43ff-a50a-40fab5720eb1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Ordered Successfully");
      event.target.reset();
      resetCart();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return <section class="contact-section">
  <div class="contact-intro">
    <h2 class="contact-title">Enter Information Below</h2>
    <p class="contact-description">
      We will send the stock to you from 2-3 days
    </p>
  </div>

  <form class="contact-form" onSubmit={onSubmit} method="POST">

    <input type="hidden" name="access_key" value="cae5a2e9-6521-43ff-a50a-40fab5720eb1" />
    <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
    <input type="hidden" name="from_name" value="Order Mail" />


    <div class="form-group-container">
      <div class="form-group">
        <label for="name" class="form-label">Name</label>
        <input id="name" name="name" class="form-input" placeholder="Your name" type="text" />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input id="email" name="email" class="form-input" placeholder="Your email" type="email" />
      </div>
      <div class="form-group">
        <label for="phone" class="form-label">Phone</label>
        <input id="phone" name="phone" class="form-input" placeholder="+1 (234) 56789" type="text" />
      </div>
      <div class="form-group">
        <label for="message" class="form-label">Address</label>
        <textarea class="form-textarea" id="message" name="message" placeholder="Your address"></textarea>
      </div>
    </div>
    <button class="form-submit" type="submit" style={{cursor:"pointer"}}>Buy Now !</button>
  </form>
  <span>{result}</span>

</section>;
};

export default Address;
