import "./App.css";
import Navigation from "./components/Naviagtion";
import Addm from "./components/Addm";
import Movielist from "./components/Movielist";
import { data } from "./components/Data";
import { useState } from "react";
import React, { component } from "react";


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
    <div style={{ backroundColor: "black" }}>
      <Navigation
        title={title}
        Rating={Rating}
        searchName={searchName}
        searchRating={searchRating}
        handeleadd={handeleadd}
      />
      <Addm handeleadd={handeleadd} />
      <Movielist
        Movie={Movie.filter(
          (e) => e.title.includes(title) && e.rating >= Rating
        )}
      />
    </div>
  );
}

export default App;
