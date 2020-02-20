import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import APIURL from '../../helpers/environment';
import soundfile from '../../assets/gong.wav';
import Sound from 'react-sound';

const SaveMyFortune = props => {
  const [fortune, setFortune] = useState('');
  const [luckyNumber, setLuckNumber] = useState('');
  const [classtype, setClasstype] = useState('');
  const [notes, setNotes] = useState('');

  const [method, setMethod] = useState('POST');
  const [header, setHeader] = useState('Save a Fortune');
  const [playing, setplaying] = useState('STOPPED');

  const soundReset = () => {
    setplaying('STOPPED');
  };

  /****** SAVE OR UPDATE ******/

  const fetchMethod = () => {
    console.log('update value in save', props.update);
    console.log('URL ending is:', props.urlending);

    if (props.update === true) {
      setMethod('PUT');
      setHeader('Update That Fortune');
      console.log('Fetch Method:', method);
    } else {
      setMethod('POST');
      setHeader('Save a Fortune');
      console.log('Fetch Method:', method);
    }
  };

  //fire fetch and update variables
  useEffect(() => {
    console.log(props.update);
    fetchMethod();
  }, [props.update, method, header]); //What Adam added - Thanks!

  const handleSubmit = e => {
    e.preventDefault();
    console.log(
      'Fortune title: ',
      fortune,
      'Fetch Method: ',
      method,
      'Update value: ',
      props.update
    ); //Dynamically changing the fetch method and url
    fetch(`${APIURL}/fortunes/${props.urlending}`, {
      method: method,
      body: JSON.stringify({
        //if user didn't fill out form it reverts to previous values stored in db when updating a fortune
        //the update props is passed as to if there is an active update. The savedFortune props is passed which would have the saved value of the fortune to update.
        //in this case if update is true and there is no stored value in the input field assign the stored current value of the fortune. This prevents the user from overwriting the value in the db with and empty string.
        fortune: props.update && fortune == '' ? props.savedFortune : fortune,
        luckNumber:
          props.update && luckyNumber == ''
            ? props.savedLuckyNumber
            : luckyNumber,
        class: props.update && classtype == '' ? props.savedType : classtype,
        notes: props.update && notes == '' ? props.savedNote : notes
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(fortuneData => {
        console.log(fortuneData);
        setFortune(''); //reseting values here and below
        setLuckNumber('');
        setClasstype('');
        setNotes('');
        props.fetchFortunes(); //fires another pull of user fortune list
        setMethod('POST'); //reseting after a dynamic fetch here and below
        setHeader('Save a Fortune');
        setplaying('PLAYING');
        props.reset();
      });
  };

  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h3 className='black-shadow'>{header}</h3>
      </header>
      {/* Form Field for Saving a Fortune */}
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label className='label' htmlFor='fortune'>
                  Fortune
                </Label>
                <Input
                  name='fortune'
                  value={fortune}
                  placeholder={props.update ? props.savedFortune : 'Fortune?'}
                  onChange={e => setFortune(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label className='label' htmlFor='luckyNumber'>
                  Lucky Number
                </Label>
                <Input
                  name=''
                  value={luckyNumber}
                  placeholder={
                    props.update ? props.savedLuckyNumber : 'Lucky#?'
                  }
                  onChange={e => setLuckNumber(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label className='label' htmlFor='classtype'>
                  Select Type
                </Label>
                <Input
                  style={{ borderRadius: '20px' }}
                  className='input-primary'
                  type='select'
                  name='classtype'
                  value={classtype}
                  onChange={e => setClasstype(e.target.value)}
                >
                  <option value=''>
                    {props.update ? props.savedType : 'Choose...'}
                  </option>
                  <option value='Fortuitous'>Fortuitous</option>
                  <option value='Ominous'>Ominous</option>
                  <option value='Nebulous'>Nebulous</option>
                  <option value='Auspicious'>Auspicious</option>
                  <option value='Inauspicious'>Inauspicious</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label className='label' htmlFor='notes'>
                  Notes
                </Label>
                <Input
                  className='input-primary'
                  type='textarea'
                  name='text'
                  value={notes}
                  placeholder={props.update ? props.savedNote : 'Any Notes?'}
                  onChange={e => setNotes(e.target.value)}
                />
              </FormGroup>
              <Button className='button-styles' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Sound
          url={soundfile}
          playStatus={Sound.status[playing]}
          onFinishedPlaying={() => {
            soundReset();
          }}
        />
      </Container>
    </div>
  );
};

export default SaveMyFortune;
