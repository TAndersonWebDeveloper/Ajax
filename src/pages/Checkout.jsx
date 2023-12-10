import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/Stripe/CheckoutForm";
import axios from "axios";
import cartSlice from "../app/cartSlice";
import { useSelector } from "react-redux";

const stripePromise = loadStripe(
  "pk_test_51Mw6zYAkjZ4fdy0ZxvhRQ02cmvHTOOASf0z3uW4tJxgdQ37ZsNrrs0M44YxP7alKVGQLrKq2QtVHvnmxnnR5yUmO00sZDEORjk"
);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [options, setOptions] = useState({});
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const fetchClientSecret = async () => {
      const { data } = await axios.post("http://localhost:5000/api/payment", {
        items: [{ id: "prod_NhWGLwMF1rSuZl" }],
        amount: cart.total,
      });
      setClientSecret(data.clientSecret);
      console.log(data.clientSecret);
    };
    fetchClientSecret();
  }, []);

  useEffect(() => {
    setOptions({
      clientSecret: clientSecret,
    });
    console.log(options);
  }, [clientSecret]);

  return (
    <div>
      {/* <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements> */}
      <form action="/api/payment" method="POST">
        <button type="submit" className="mt-20">
          Checkout
        </button>
      </form>
      <p>{cart.total}</p>
    </div>
  );
};

export default Checkout;
