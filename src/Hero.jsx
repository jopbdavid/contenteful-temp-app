import React from "react";
import heroImg from "./assets/dev.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby cred occupy cornhole synth tumeric keytar snackwave. Edison
            bulb narwhal jawn paleo cred cronut mlkshk direct trade swag deep v
            vape subway tile scenester tote bag franzen. Crucifix iPhone
            authentic mumblecore migas, unicorn put a bird on it. Fixie vegan
            organic tilde food truck mustache gluten-free health goth 8-bit
            disrupt subway tile vibecession beard drinking vinegar.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
