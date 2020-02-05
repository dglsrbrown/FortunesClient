import React from 'react';
import {
  
  CardTitle,
  CardText,
  
} from 'reactstrap';

const FortunesList = props => {
  return (
    <div className='card align-itmes-center'>
      <CardTitle className='m-auto about-text'>{props.fortunesToMap.fortune}</CardTitle>
      <CardText className='m-auto about-text'>{props.fortunesToMap.luckNumber}</CardText>
      <CardText className='m-auto about-text'>{props.fortunesToMap.class}</CardText>
      <CardText className='m-auto about-text'>{props.fortunesToMap.notes}</CardText>
      <button
        className='card-button button-styles ml-auto mr-auto mb-1'
        href='#'
        value={props.fortunesToMap.id}
        onClick={e => props.updater(props.fortunesToMap)}
      >
        Update
      </button>
      <button
        className=' card-button button-styles ml-auto mr-auto mb-1'
        onClick={e => props.deleteFortunes(props.fortunesToMap, e.target.value)}
      >
        Delete
      </button>
    </div>
  );
};

export default FortunesList;
