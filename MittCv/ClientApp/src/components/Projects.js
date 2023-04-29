import React from "react";

const Projects = () => {
  return (
    <div>
      <section className="projekt margin-75">
        <h4 id="link-projekt"> Projekt:</h4>
        <div class="container">
          <div className="col-lg-8 offset-lg-2">
            <div class="card ">
              <div class="card-header ">
                <p> Grupparbete</p>
              </div>
              <div class="card-body">
                <h5 class="card-title ">Resturang recension hemsida </h5>
                <p class="card-text">
                  <p>
                    Jag och några klasskamrater byggde en resturangrecentions
                    sida, som låter användarna skriva recentioner om deras
                    favoritställen. I detta projekt har jag fokuserat på backend
                    delen med entity framework och lite axios för att få ihop
                    backend med frontend.
                    https://github.com/Sebbbbe/WebbApplikation
                  </p>
                </p>
                <div class="text-center">
                  <a
                    href="https://github.com/Sebbbbe/WebbApplikation"
                    target="_blank"
                    replace
                    class="btn btn-success"
                  >
                    Go To Project
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8  " className=" col-lg-8 offset-lg-2">
            <div class="card " className="card1">
              <div class="card-header">
                <p>Eget Arbete</p>
              </div>
              <div class="card-body">
                <h5 class="card-title">Queenslab backend inlämning:</h5>
                <p class="card-text">
                  Här byggde jag ett API som håller reda på antal besökare i en
                  butik, både i butiken som helhet men också på varje avdelning.
                  Applikationen håller reda på när besökare går in och lämnar
                  butiken som sedan sparas i en databas.
                  https://github.com/Sebbbbe/QueensLabBackEnd
                </p>
                <div class="text-center">
                  <a
                    href="https://github.com/Sebbbbe/QueensLabBackEnd"
                    target="_blank"
                    class="btn btn-success"
                  >
                    Go To Project
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-md-8   " className="col-lg-8 offset-lg-2">
              <div class="card" className="card1">
                <div class="card-header">
                  <p>Eget Arbete</p>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Första backend inlämningen:</h5>
                  <p class="card-text">
                    Jag tänker bygga en bugtracker hemsida och som första
                    inlämning på databaser var detta mitt projekt. Det är
                    väldigt enkelt då det är första gången jag kom i kontakt med
                    entity framework.
                  </p>
                  <div class="text-center">
                    <a href="#" class="btn btn-success">
                      Go To Project
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
