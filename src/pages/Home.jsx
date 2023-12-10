import React from "react";
import Amenities from "../components/Amenities/Amenities";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/ui/Navbar";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactForm from "../components/ContactForm/ContactForm";
import CheckoutForm from "../components/Stripe/CheckoutForm";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Testimonials />
      <Amenities />
      <ContactForm />
    </div>
  );
};

export default Home;
