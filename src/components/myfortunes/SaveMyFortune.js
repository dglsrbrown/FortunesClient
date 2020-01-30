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
    fetch(`http://localhost:4000/fortunes/${props.urlending}`, {
      method: method,
      body: JSON.stringify({
        fortune: fortune,
        luckNumber: luckyNumber,
        class: classtype,
        notes: notes
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
  /******** RESET FETCH ******/
  // const resetFetch = () =>{

  // }
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
                  placeholder='Your Fortune'
                  onChange={e => setFortune(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='luckyNumber'>Lucky Number</Label>
                <Input
                  name=''
                  value={luckyNumber}
                  placeholder='Your Lucky#'
                  onChange={e => setLuckNumber(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='classtype'>Select Type</Label>
                <Input
                  type='select'
                  name='classtype'
                  value={classtype}
                  placeholder='Fortune Type?'
                  onChange={e => setClasstype(e.target.value)}
                >
                  <option value=''></option>
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
                  type='textarea'
                  name='text'
                  value={notes}
                  placeholder='Any Notes?'
                  onChange={e => setNotes(e.target.value)}
                />
              </FormGroup>
              <Button type='submit'>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SaveMyFortune;