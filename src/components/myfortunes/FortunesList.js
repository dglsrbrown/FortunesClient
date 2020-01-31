import React from 'react';
// import Fortune from './OneFortune';
import {
  cardTitle,
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
    <div className=''>
      <CardBody className=''>
        {/* {console.log(props.fortunesToMap.id)} */}
        <CardTitle className='bg-primary'>
          {props.fortunesToMap.fortune}
        </CardTitle>
        <CardText>{props.fortunesToMap.luckNumber}</CardText>
        <CardText>{props.fortunesToMap.class}</CardText>
        <CardText>{props.fortunesToMap.notes}</CardText>
        <ButtonGroup>
          <Button
            href='#'
            value={props.fortunesToMap.id}
            onClick={e => props.updater(props.fortunesToMap)}
          >
            Update
          </Button>
          <Button
            onClick={e =>
              props.deleteFortunes(props.fortunesToMap, e.target.value)
            }
          >
            Delete
          </Button>
        </ButtonGroup>
      </CardBody>
    </div>
  );
};

export default FortunesList;
