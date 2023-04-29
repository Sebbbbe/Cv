import React, { Component } from "react";

const WorkeExperience = () => {
  return (
    <div>
      <section className="projekt margin-75">
        <div class="container">
          <div className="col-lg-8 offset-lg-2">
            <div class="card ">
              <div class="card-header " id="link-lia">
                <p> LIA</p>
              </div>
              <div class="card-body">
                <h5 class="card-title "> Lärande i arbete 5 månader totalt </h5>
                <p class="card-text">
                  <p>
                    Projektet var en applikation för att kunna se vilka
                    konferensrum som var lediga eller upptagna . Detta var en
                    forsättning på ett internt projekt som lia studenter innan
                    mig hade börjat. Detta visades på en tv-skärm vid entré som
                    en karta, där alla rum fanns på. På kartan kunde man trycka
                    med fingret för att se vart rummet fanns, samt snabbt kunna
                    se när rummet var ledigt. Bokningen gjordes inte via skärmen
                    utan det gjorde man online eller vid via en Ipad som fanns
                    vid varje rum. Att kunna boka via skärmen var något vi
                    skulle kunna förbättra om vi hade mer tid. stack fokus: Jag
                    gjorde några få förändringar i backend, där jag använde mig
                    av .netentity-framework, men det mesta var gjort i front-end
                    med verktyget React
                  </p>
                </p>

                <div class="text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projekt margin-75">
        <div class="container">
          <div className="col-lg-8 offset-lg-2">
            <div class="card ">
              <div class="card-header " id="link-arbete">
                <p> Arbete</p>
              </div>
              <div class="card-body">
                <h5 class="card-title "> Jobberfarenhet 6månader:</h5>
                <p class="card-text">
                  <p>
                    <br />
                    Jag jobbade hos Nexergroup i Göteborg, som tidigre hette
                    Sigma it. Det är ett konsultföretag där jag jobbade i
                    projekt som hörde till företaget SKF. Under de två första
                    månaderna var jag delaktig i ett projekt som heter Dialset.
                    Det är en applikation om kullager. Du börjar med att välja
                    vilket lager du har och sedan driftförhållanden och
                    smörjmedel. När du har gjort detta får du ut information om
                    hur du ska använda produkterna. Applikation används för att
                    hjälpa SKF anställda,deras kunder och privatpersoner. Stacks
                    som jag använde mig av där var typescript, internt styling
                    program som SKF applikationer använder sig av för att få
                    färdiga komponenter som man sedan kan styla om. <br />
                    <br />
                    Från tredje till sjätte månaden började jag på ett nytt
                    projekt som SKF ville ha. Detta är ett intern program för
                    användaren inom SKF att hantera data inom vintkraftverk. De
                    hade redan ett program som gjorde detta, men programet var
                    omodernt och de önskade en ny version. I detta projekt
                    fokuserade jag också på frontend delen och byggde det med
                    Typescript och med SKF interna styling program. Meningen med
                    projektet är att man har massor med data inom vindkraftverk,
                    som man enkelt vill kunna vissa upp för SKF kunder. Man vill
                    också på ett enkelt sätt kunna ändra datan om något är fel
                    och se omprodukter som SKF säljer finns på lager.
                    <br />
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="mx-auto p-2">
        <b>Länk till dialset som jag jobbade på. </b>
        <a href="https://dialset.skf.com/dialsetting">
          https://dialset.skf.com/dialsetting
        </a>
        <br />
        <b>VINDKRAFTVERKS PROJEKTET ÄR PRIVAT, LIKA SÅ MED MITT LIA PROJEKT</b>
      </p>
    </div>
  );
};

export default WorkeExperience;
