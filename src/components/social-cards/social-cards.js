import  Card  from "./card/card.js";
import React from 'react';
import {Container} from "./card/card.css";

const SocialCards = ({ items }) => (
 
  <Container>

    {items.map((item, i) => (
      <Card {...item} key={i} />
    ))}
  </Container>
);


export default SocialCards;