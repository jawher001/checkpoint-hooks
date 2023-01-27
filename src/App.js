import "./App.css";
import Navigation from "./components/Naviagtion";
import Addm from "./components/Addm";
import Movielist from "./components/Movielist";
import { data } from "./components/Data";
import { useState } from "react";
import React, { component } from "react";
import Filter from "./components/Filter";

function App() {
  const [Movie, setMovie] = useState(data);
  const handeleadd = (newmovie) => {
    setMovie([...Movie, newmovie]);
  };
  const [title, settitle] = useState("");
  const [Rating, setrating] = useState("0");
  const searchName = (titre) => {
    settitle(titre);
  };
  const searchRating = (Rate) => {
    setrating(Rate);
  };

  return (
    <>
      <Navigation />
      <Filter
        title={title}
        Rating={Rating}
        searchName={searchName}
        searchRating={searchRating}
      />
      <Addm handeleadd={handeleadd} />
      <Movielist Movie={Movie.filter((e)=>e.title.includes(title)&& e.rating >= Rating )} />
    </>
  );
}

export default App;
