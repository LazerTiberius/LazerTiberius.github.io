import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
export const CardItem = styled.div`
  background-color: transparent;
  min-width: 200px;
  height: 200px;
  margin: 1rem;

`;



export const Container = styled.div`
  display: flex;
  margin: 4rem
  flex-wrap: wrap;

  ${MEDIA.TABLET`
    display: block;
  `};
`;


export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  
`;

export const CardFront = styled.div`
  background: ${props => (props.color ? props.color : 'white')};
  position: absolute;
  color: black;
 

  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  kit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
`;

export const CardBack = styled.div`
  position: absolute;
  background: ${props => (props.color ? props.color : 'white')};
  color: ${props => (props.textColor ? props.textColor : 'black')};;
  font-family: 'Roboto', sans-serif;

  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  kit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  transform: rotateY(180deg);
`;
