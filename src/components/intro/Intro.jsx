import './intro.scss';

import TypeWriter from 'typewriter-effect';

const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='img-container'>
          <img src='assets/man.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi there, I'm</h2>
          <h1>Sachin Kumar Verma</h1>
          <h3>
            <span>
              <TypeWriter
                className='typewriter'
                options={{
                  strings: ['Front-end', 'Mainframes'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>{' '}
            Developer
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
    </div>
  );
};

export default Intro;
