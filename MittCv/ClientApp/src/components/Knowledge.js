import React from "react";
import { TwoStars } from "../components/ReusableCode/stars/TwoStars";
import { ThreeStars } from "./ReusableCode/stars/ThreeStars";
import { FourStars } from "./ReusableCode/stars/FourStars";
import { FiveStars } from "./ReusableCode/stars/FiveStars";

const Knowledge = () => {
  return (
    <div>
      <div class="container col-md-6">
        <div class="rows ">
          <section id="link-kunskaper" className="kunskaper">
            <h4> Kunskaper</h4>

            <section className=" flex-parent">
              <p className=" flex-child">
                Javascript <FourStars />
              </p>

              <p className=" flex-child">
                HTML5 <FiveStars />
              </p>
              <p className=" flex-child">
                CSS <FourStars />
              </p>

              <p className=" flex-child">
                React <FourStars />
              </p>

              <p className=" flex-child">
                Axios <TwoStars />
              </p>
              <p className=" flex-child">
                C# <FourStars />
              </p>

              <p className=" flex-child">
                Entity framework <FourStars />
              </p>
              <p className=" flex-child">
                LINQ <FourStars />
              </p>

              <p className=" flex-child">
                Microsoft sql server <ThreeStars />
              </p>
            </section>
          </section>
          <div class="container text-center">
            <div class="row align-items-start">
              <div class="col">
                <div className="fler-kunskaper mt-5">
                  <h5 className=""> Fler Kunskaper</h5>
                  <div>Typescript</div>
                  <div>Tailwind</div>
                  <div>Bootstrap</div>
                  <div>Jest</div>
                  <div>cypress</div>
                </div>
              </div>
              <div class="col">
                <div className="Verktyg mt-5">
                  <h5> Verktyg</h5>
                  <div>uml (Unified Modeling Language) </div>
                  <div>GitHub</div>
                  <div>Git</div>
                  <div>Metod: Scrum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
