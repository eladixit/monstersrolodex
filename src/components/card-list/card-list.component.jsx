import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {
        //Iterate over teh list of monsters
        props.monsters.map((monster) => (
          <Card key={monster.id} monster={monster}></Card>
        ))
      }
    </div>
  );
};
