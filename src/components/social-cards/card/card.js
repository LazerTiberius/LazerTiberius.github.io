import React from 'react';
import { CardItem, InnerContainer, CardFront, CardBack } from './card.css';
import * as icons1 from 'react-icons/si';
import * as icons2 from 'react-icons/fi';
import * as icons3 from 'react-icons/cg';
import { IoOpenOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import './cardGlobal.css';
import isUrl from 'is-url';

function Back(props) {
  const content = props.backContent;
  if (isUrl(content)) {
    return (
      <a href={props.backContent} target="_blank" rel="noreferrer">
        <IconContext.Provider
          value={{ style: { verticalAlign: 'middle' } }}
        >
          <IoOpenOutline size="3em" color={props.iconColor || 'black'} />
        </IconContext.Provider>
      </a>
    );
  } else {
    return <span style={{ "margin" : "auto", "display":"inline-block"}}>{props.backContent} </span>;
  }
}

function Card(item) {
  const icons = Object.assign({}, icons1, icons2);
  Object.assign(icons, icons3);
  const Icon = icons[item.icon];
  

  return (
    <CardItem className="flip-card">
      <InnerContainer className="flip-card-inner">
        <CardFront color={item.frontColor}>
          <IconContext.Provider
            value={{ style: { verticalAlign: 'middle', marginTop: '6rem' } }}
          >
            <Icon size="5em" color={item.iconColor || 'white'} />
          </IconContext.Provider>
        </CardFront>
        <CardBack color={item.frontColor} textColor={item.iconColor}>
         <span style={{ "margin" : "1rem", "display":"inline-block"}}> {item.flavorText ||  item.title} </span>
          <hr/>
          <Back backContent={item.backContent} iconColor={item.iconColor} />
        </CardBack>
      </InnerContainer>
    </CardItem>
  );
}

export default Card;
