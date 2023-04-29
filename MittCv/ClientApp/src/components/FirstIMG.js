import { FiArrowDown } from "react-icons/fi";
import React, { Component } from "react";
const FirstIMG = () => {
  return (
    <div>
    <section className="img-container">
      <h1 class="centered">
        Sebastian Tiger
        <br></br>
        Full-Stack Dev
        <a href="#link-about-me">
          <FiArrowDown className="arrow-down " />{" "}
        </a>
      </h1>
    </section>
    </div>
  );
};

export default FirstIMG;
