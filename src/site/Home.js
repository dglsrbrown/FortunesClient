import React from 'react';
import './Home.css';

const Home = props => {
  return (
    <div className='bg-home row justify-content-center '>
      <div className='trans-bg col-6 text-center mh-100'>
        <h1>Welcome</h1>
        <h3 className='blinking'>Take Hold of Your Future!</h3>
        <h5>
          Our psychic Coders are hard at work melding magic and megabytes.
        </h5>
        <p>
          <strong>Fortune cookie fortunes</strong> are the proverbial desert
          after the cookie itself. At times a few fortunes are found with
          uncanny accuracy. We envite you to here{' '}
          <strong>
            <u>save those fated fortunes</u>
          </strong>{' '}
          along with a few notes for future divination.
        </p>
        <p>
          Here at Fortune Cookie Fortune your future is our business.{' '}
          <mark>
            Look for future updates where for only $1.99 you can guarantee your
            good fortune.
          </mark>
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
