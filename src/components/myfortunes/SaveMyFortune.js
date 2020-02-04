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

const SaveMyFortune = props => {
  const [fortune, setFortune] = useState('');
  const [luckyNumber, setLuckNumber] = useState('');
  const [classtype, setClasstype] = useState('');
  const [notes, setNotes] = useState('');

  const [method, setMethod] = useState('POST');
  // const [urlending, setURLending] = useState('');
  const [header, setHeader] = useState('Save a Fortune');

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
    );
    fetch(`${APIURL}/fortunes/${props.urlending}`, {
      method: method,
      body: JSON.stringify({
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
        setFortune('');
        setLuckNumber('');
        setClasstype('');
        setNotes('');
        props.fetchFortunes(); //fires another pull of user fortune list
        setMethod('POST');
        setHeader('Save a Fortune');
        props.reset();
      });
  };

  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h3>{header}</h3>
      </header>

      <Container>
        <Row>
          {/* md={{ size: 6, offset: 3 }} */}
          <Col>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor='fortune'>Fortune</Label>
                <Input
                  name='fortune'
                  value={fortune}
                  placeholder={
                    props.update ? props.savedFortune : 'Your Fortune'
                  }
                  onChange={e => setFortune(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='luckyNumber'>Lucky Number</Label>
                <Input
                  name=''
                  value={luckyNumber}
                  placeholder={props.update ? props.savedLuckyNumber : 'Lucky#'}
                  onChange={e => setLuckNumber(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='classtype'>Select Type</Label>
                <Input
                  className='input-primary'
                  // style = {{background: "rgb(254, 247, 245, 0.4)" }}
                  type='select'
                  name='classtype'
                  value={classtype}
                  // placeholder={props.update ? props.savedType : 'Fortuitous'}
                  onChange={e => setClasstype(e.target.value)}
                >
                  {/* disabled selected hidden - had this below after value='' but got warnings for it*/}
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
                <Label htmlFor='notes'>Notes</Label>
                <Input
                  className='input-primary'
                  type='textarea'
                  name='text'
                  value={notes}
                  placeholder={props.update ? props.savedNote : 'Any Notes?'}
                  onChange={e => setNotes(e.target.value)}
                />
              </FormGroup>
              <Button className= 'button-styles' type='submit'>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SaveMyFortune;
