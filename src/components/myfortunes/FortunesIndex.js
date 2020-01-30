import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import SaveMyFortune from './SaveMyFortune';
import FortunesList from './FortunesList';

const FortuneIndex = props => {
  const [fortunes, setFortunes] = useState([]);
  const [update, setUpdate] = useState(false);
  const [urlending, setURLending] = useState('');

  /****** Fetch All User Fortunes ******/
  const fetchFortunes = () => {
    fetch('http://localhost:4000/fortunes/all', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(fortunesData => {
        console.log(fortunesData);
        setFortunes(fortunesData);
      });
  };

  useEffect(() => {
    fetchFortunes();
  }, []); //the empty array has it only called once

  /****** Display User Fortunes ******/

  const fortuneMapper = () => {
    return fortunes.map((fortuneInfo, index) => {
      return (
        <Card key={index} className='cardName'>
          <FortunesList
            fortunesToMap={fortuneInfo}
            deleteFortunes={deleteFortunes}
            updater={upDater}
            // doit={doit}
          />
        </Card>
      );
    });
  };

  /****** Delete User Fortunes ******/

  const deleteFortunes = fortuneInfo => {
    fetch(`http://localhost:4000/fortunes/${fortuneInfo.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token
      })
    }).then(() => fetchFortunes());
  };

  /****** Update a Fortune ******/

  const upDater = updateStatus => {
    setUpdate(true);
    setURLending(updateStatus.id);
    console.log(updateStatus.id);
  };

  const Reset = () => {
    setURLending('');
    setUpdate(false);
    console.log('Update after Reset:', update);
  };

  return (
    <Container>
      <Row>
        <Col md='4'>
          <SaveMyFortune
            fetchFortunes={fetchFortunes}
            token={props.token}
            // method={method}
            urlending={urlending}
            // header={header}
            update={update}
            reset={Reset}
          />
        </Col>
        <Col md='8'>
          {/* <FortunesList
            fort={fortunes}
            fetchFortunes={fetchFortunes}
            token={props.token}
          /> */}
          {/* {update? (<Update token={props.token}/>) : {fortuneMapper}} */}
          {fortuneMapper()}
        </Col>
      </Row>
    </Container>
  );
};

export default FortuneIndex;
