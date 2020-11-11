import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{}</ul>
    </div>
  );
}

export function ListItem({ }) {
  return <li className="list-group-item">{}</li>;
}
