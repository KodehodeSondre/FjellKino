import React from "react";
import cinemaImage from "../assets/Fjell Kino.jpg"; 
import reclinerImage from "../assets/recliner.jpg";
import natureImage from "../assets/nature.jpg";
import eventImage from "../assets/event.jpg";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={cinemaImage} alt="Fjell Kino" className="hero-image" />
        <h1 className="hero-title">Velkommen til Fjell Kino – Der Magien Møter Naturen</h1>
      </div>

      <section className="home-section">
        <p>
          Dypt inne i hjertet av Norges majestetiske fjellandskap finner du en kinoopplevelse utenom det vanlige. Fjell Kino kombinerer det beste fra moderne kinoteknologi med en atmosfære som omfavner naturens ro og skjønnhet.
        </p>
        <p>
          Enten du er en filmelsker, en eventyrer på gjennomreise, eller en familie på jakt etter en unik opplevelse, er Fjell Kino stedet hvor minner skapes og historier kommer til live på det store lerretet.
        </p>
      </section>

      <section className="home-section">
        <h2>🎥 En Kinosal Som Tar Pusten Fra Deg</h2>
        <img src={reclinerImage} alt="Luxury recliner seats" className="section-image" />
        <p>
          Våre kinosaler er designet for å gi deg en filmopplevelse i verdensklasse. Med **4K laserprojektorer**, krystallklar **Dolby Atmos-lyd**, og luksuriøse **recliner-seter**, får du en innlevelse som gjør filmene mer levende enn noensinne.
        </p>
        <p>
          Samtidig har vi beholdt den varme, intime stemningen som gjør oss unike – med interiør inspirert av den norske fjellheimen og store panoramavinduer i foajeen, hvor du kan nyte utsikten før forestillingen starter.
        </p>
      </section>

      <section className="home-section">
        <h2>🎬 Filmutvalg for Alle</h2>
        <p>
          På Fjell Kino viser vi et bredt spekter av filmer – fra de nyeste **Hollywood-blockbusterne** til nordiske filmperler og prisbelønte kunstfilmer.
        </p>
        <p>
          Vi støtter også norske filmskapere og arrangerer spesialvisninger, temakvelder og førpremierer. **Familievennlige matinévisninger** og **midnattsvisninger av kultklassikere** gir noe for enhver smak.
        </p>
      </section>

      <section className="home-section">
        <h2>🍿 Mer Enn Bare en Kino</h2>
        <img src={eventImage} alt="Movie event at Fjell Kino" className="section-image" />
        <p>
          Fjell Kino er mer enn et sted for film – det er en samlingsplass for **kultur og fellesskap**. Vi arrangerer filmfestivaler, regissørbesøk, quizkvelder og utekino på sommerstid.
        </p>
        <p>
          Nyt en kopp håndbrygget kaffe fra **Fjell Kafé**, som serverer hjemmelagde bakverk og lokale delikatesser, perfekt for en avslappende stund før eller etter filmen.
        </p>
      </section>

      <section className="home-section">
        <h2>🌱 Bærekraft og Miljø</h2>
        <img src={natureImage} alt="Norwegian nature" className="section-image" />
        <p>
          Vi tar vårt ansvar for naturen på alvor og har et sterkt fokus på **bærekraft**. Fjell Kino drives med **fornybar energi**, har **resirkulerbare popcorn- og drikkebegre**, og jobber kontinuerlig med å redusere vårt klimaavtrykk.
        </p>
        <p>
          Vi tror at en fantastisk kinoopplevelse kan kombineres med miljøbevissthet – og vi inviterer deg til å bli en del av vår **grønne filmreise**.
        </p>
      </section>

      <section className="home-section">
        <h2>📍 Besøk Oss</h2>
        <p>
          Fjell Kino ligger idyllisk til, lett tilgjengelig med bil og kollektivtransport. Gratis parkering er tilgjengelig, og vi har ladestasjoner for elbiler.
        </p>
        <p>
          Ønsker du en weekendtur kombinert med kino? Flere av områdets overnattingssteder tilbyr spesialpakker med kinobilletter inkludert.
        </p>
        <h3>Opplev film på en helt ny måte – velkommen til Fjell Kino, der magien møter naturen!</h3>
      </section>
    </div>
  );
};