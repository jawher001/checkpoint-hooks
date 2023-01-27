import React, { Component, useEffect } from "react";

const Filter = ({searchName, searchRating, title, Rating}) => {
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => searchName(e.target.value)}
        placeholder="search movie name"
      ></input>

      <br />
      <br />

      <input
        type="number"
        value={Rating}  onChange={(e)=>searchRating(e.target.value)}
        placeholder="search movie rating"
      ></input>

      <br />
      <br />
    </div>
  );
};
export default Filter;
