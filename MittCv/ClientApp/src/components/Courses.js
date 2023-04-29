import React from "react";

const Courses = () => {
  return (
    <div>
      <div class="container test">
        <div class="row">
          <ul class="list-group  cool-md-6 col-xl-6 col-lg-6 margin-50 ">
            <li class="list-group-item" id="link-kurser">
              kurser som jag läst:
            </li>

            <li class="list-group-item list-group-item-success">
              Introduktion till systemutveckling 2v
            </li>
            <li class="list-group-item list-group-item-light">
              Introduktion till objektorientering 4v
            </li>
            <li class="list-group-item list-group-item-success">
              Objektorienterad programmering, grundläggande 12v
            </li>
            <li class="list-group-item list-group-item-light">
              {" "}
              Objektorienterad analys 4v
            </li>
            <li class="list-group-item list-group-item-success">
              Objektorienterad design 4v
            </li>
            <li class="list-group-item list-group-item-light"> Databaser 6v</li>

            <br></br>
          </ul>
          <ul class="list-group col-xl-6 cool-md-6 col-lg-6 margin-50 ">
            <li class="list-group-item  list-group-item-success">Fler Kurser som jag har läst:</li>
            <li class="list-group-item list-group-item-light">
              Webbapplikationer 8v
            </li>
            <li class="list-group-item list-group-item-success">
              Agil Projektledning 2v
            </li>
            <li class="list-group-item list-group-item-light">
              LIA1 -Lärande i arbete 8v
            </li>
            <li class="list-group-item list-group-item-success">
              Objektorienterad programmering avancerad 12v
            </li>
            <li class="list-group-item list-group-item-light">
              LIA 2 - lärande i arbete 12v
            </li>
            <li class="list-group-item list-group-item-success">
              {" "}
              examensarbete 2v
            </li>
            {/* <li class="list-group-item list-group-item-success"></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
