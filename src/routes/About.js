import React from "react";
import "./pages.css";
import aboutImage from "../assets/dinah/Dinah Left Comb.jpg";

const About = () => {
  return (
    <section className="about-container">
      <div className="index-logo">
        <img
          src={aboutImage}
          className="about-image"
          alt="Dinah applying eye liner pencil to model's eye"
        />
      </div>
      <div>
        <p>
          &emsp;Dinah Raphaelle is a hairstylist and makeup artist (HMUA) based
          in Los Angeles, New York, and London. Raphaelle's background in art,
          sculpture and hair both inspires and informs her work. She received
          her Bachelor's degree in Fine Arts from Moore College of Art & Design
          in Philadelphia, and studied art at Goldsmiths University and
          Camberwell College of Art in London, before attending Toni & Guy
          Hairstyling Academy in Los Angeles. Her expertise in design and color
          has led to creative and imaginative work with extraordinary
          photographers Ben Von Wong, Renee Robyn Photography, Bella Kotak,
          Warne Noyce, Brett Stanley.
        </p>
        <p>
          &emsp;Her hair work has been repeatedly featured on the cover of
          magazines such as Dark Beauty (and on set for music videos AVICCI,
          “Broken Arrows”) and additional multi-media projects, ad campaigns,
          gaming, and numerous hair and makeup creations for fashion and on the
          runway. These include key involvement during London FashionWeek, Paris
          FashionWeek, New York FashionWeek, Fashion’s Finest London and more
          with her hair and makeup work.
        </p>
      </div>
    </section>
  );
};

export default About;
