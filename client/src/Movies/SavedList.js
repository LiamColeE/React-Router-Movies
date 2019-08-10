import React from 'react';
import { Link } from "react-router-dom"
const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}

    <Link to="/movielist">
    <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;

let n = 10;

function likes(names) {
  // TODO
  let text = "like this"
  if(names.length === 0){
     return "no one likes this";
  }
  else if(names.length === 1){
    return names[0] + " likes this";
  }
  else{
    names.foreach((element, index) => {
      
    });
    return text;
  }
}