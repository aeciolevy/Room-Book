import React from 'react'
import { DivIntro, ButtonIntro } from './components-styled';

const Intro = (props) => {
  return(
    <DivIntro>
      <div style={{transform: 'translateY(40vh)'}}>
        <ButtonIntro> Pro Member </ButtonIntro>
        <ButtonIntro style={{marginLeft: '10px'}}> Normal Member </ButtonIntro>
      </div>
    </DivIntro>
  );
}

export default Intro;
