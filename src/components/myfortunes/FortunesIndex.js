import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import SaveMyFortune from './SaveMyFortune';
import FortunesList from './FortunesList';
import APIURL from '../../helpers/environment';


const FortuneIndex = props => {
  const [fortunes, setFortunes] = useState([]);
  const [update, setUpdate] = useState(false);
  const [urlending, setURLending] = useState('');

  const [savedFortune, setSavedFortune] = useState();
  const [savedLuckyNumber, setsavedLuckyNumber] = useState();
  const [savedType, setsavedType] = useState();
  const [savedNote, setsavedNote] = useState();

  /****** Fetch All User Fortunes ******/
  const fetchFortunes = () => {
    fetch(`${APIURL}/fortunes/all`, {
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
      console.log("The mapped fortune's class: ", fortuneInfo.class);
    
      return (
        <Card className="mb-2"key={index} >
          <FortunesList
            fortunesToMap={fortuneInfo}
            deleteFortunes={deleteFortunes}
            updater={upDater}
          />

        </Card>
      );
    });
  };

  /****** Delete User Fortunes ******/

  const deleteFortunes = fortuneInfo => {
    fetch(`${APIURL}/fortunes/${fortuneInfo.id}`, {
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
    setSavedFortune(updateStatus.fortune);
    setsavedLuckyNumber(updateStatus.luckNumber);
    setsavedType(updateStatus.class);
    setsavedNote(updateStatus.notes);
    console.log(
      'id: ',
      updateStatus.id,
      ' fortune: ',
      updateStatus.fortune,
      ' luckyNumber: ',
      updateStatus.luckNumber,
      ' fortuneType: ',
      updateStatus.class,
      ' Notes: ',
      updateStatus.notes
    );
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
            urlending={urlending}
            update={update}
            reset={Reset}
            savedFortune={savedFortune}
            savedLuckyNumber={savedLuckyNumber}
            savedType={savedType}
            savedNote={savedNote}
          />
        </Col>
        <Col md='6'>
          
          {fortuneMapper()}
        </Col>
      </Row>
    </Container>
  );
};

export default FortuneIndex;
