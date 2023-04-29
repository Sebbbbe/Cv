import React from "react";
import aboutMeImage from "../Image/pictureOfMe.jpg";
const AboutMe = () => {
  return (
    <div>
      <div className="aboutMe">
        <h4 id="link-about-me">
          <h2>About Me</h2>
        </h4>
        <img id="img-2" src={aboutMeImage} alt="" />
        <p className="mx-auto p-2 ">
          Hej, Jag heter Sebastian och är 24 år, uppvuxen i Stockholm och
          flyttade till Göteborg för att utbilda mig till Systemutvecklare. Jag
          gillar att programmera för att jag känner att jag utvecklas varje dag.
          När det finns möjligt älskar jag att lära mig nya tekniker som gör det
          lättare, snabbare eller gör mig till en smartare kodare. Dessutom är
          jag öppen för nya tankesätt och det spelar ingen roll hur erfaren jag
          är på något, då jag alltid försöker se saker som ett nyfiket barn som
          har hittat något nytt att lära sig.
          <br />
          Utbildning:
          <b> 2020 - 2022 Objektorienterad Systemutvecklare Handelsakademin </b>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
