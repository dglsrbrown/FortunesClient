import React from 'react';
import soundfile from '../assets/zengarden.mp3';
import Sound from 'react-sound';

const About = () => {
  return (
    <div className='about-bg p-3'>
      <div className='row justify-content-center'>
        <div className='col-6 trans-bg-light text-center'>
          <p>
            This site was created as a PERN stack exercise with some tongue and
            cheek. But let me leave you with some deeper thoughts about your
            future and one's fortune.
          </p>
          <blockquote>
            <p>
              &quot;So how do you change your karma? ...Let us say that tomorrow
              someone will die. ...the result of the very subtle interplay of
              his thinking as it meets conditions. Maybe someone has seen his
              future and can tell that such-and-such accident will befall him
              the next day, leading to his death. Meanwhile he has started
              chanting, chanting, chanting, or doing strong mantra practice.
              Then the causes and conditions that are tending to lead him toward
              this accident start to not come together as well as when it was
              perceived that he was going to die. That is because, at the moment
              of the prediction of the death, this fortune-teller has seen the
              man's mind energy tending in a certain direction. If he just lives
              according to the energy that he has in his mind at the time, he
              cannot escape the meeting of energies that is his death. But
              chanting &apos;straightens out&apos; the karma - the mind energy -
              and it leads to a slightly different result: he gets in an
              accident, but ends up only breaking his leg. He does not die after
              all! This is possible.&quot;
              <footer className='blockquote-footer'>
                Zen Master Seung Sahn
              </footer>
            </p>
          </blockquote>
          <p> Thank you for visiting my site. Warm regards - Douglas Brown</p>
        </div>
      </div>
      <Sound url={soundfile} playStatus={Sound.status.PLAYING} />
    </div>
  );
};

export default About;
