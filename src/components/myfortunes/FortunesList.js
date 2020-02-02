import React from 'react';
// import Fortune from './OneFortune';
import {
  cardTitle,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardTxt,
  Button,
  ButtonGroup
} from 'reactstrap';

const FortunesList = props => {
  // console.log(props);
  return (
    <div className='card align-itmes-center'>
      {/* {console.log(props.fortunesToMap.id)} */}
      <CardTitle className='m-auto'>{props.fortunesToMap.fortune}</CardTitle>
      <CardText className='m-auto'>{props.fortunesToMap.luckNumber}</CardText>
      <CardText className='m-auto'>{props.fortunesToMap.class}</CardText>
      <CardText className='m-auto'>{props.fortunesToMap.notes}</CardText>
      {/* <ButtonGroup > */}
      <Button
        className='button-styles'
        href='#'
        value={props.fortunesToMap.id}
        onClick={e => props.updater(props.fortunesToMap)}
      >
        Update
      </Button>
      <Button
        className='button-styles'
        onClick={e => props.deleteFortunes(props.fortunesToMap, e.target.value)}
      >
        Delete
      </Button>
      {/* </ButtonGroup> */}
    </div>
  );
};

export default FortunesList;
