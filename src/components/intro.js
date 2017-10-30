import React from 'react';
import { DivIntro, ButtonIntro } from './components-styled';

const Intro = (props) => {
  return (
    <DivIntro>
      <div style={{transform: 'translateY(40vh)'}} >
        <ButtonIntro onClick={() => props.handleClick('Pro')}> Pro Member </ButtonIntro>
        <ButtonIntro onClick={() => props.handleClick('Normal')} style={{marginLeft: '10px'}}> Normal Member </ButtonIntro>
      </div>
    </DivIntro>
  );
};

export default Intro;
