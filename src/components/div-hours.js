import React from 'react';
import { DivTimeText } from './components-styled';

const DivHour = () => {
  return (
    <div className="d-flex flex-row flex-nowrap">
      <DivTimeText className="col-sm-1 mr-auto" > 7:00 </DivTimeText>
      <DivTimeText className="col-sm-1 mr-auto" > 8:00 </DivTimeText>
      <DivTimeText className="col-sm-1 mr-auto" > 9:00 </DivTimeText>
      <DivTimeText className="col-sm-1 mr-auto" > 10:00 </DivTimeText>
      <DivTimeText className="col-sm-1 mr-auto" > 11:00 </DivTimeText>
      <DivTimeText className="col-sm-1 mr-auto" > 12:00 </DivTimeText>
      <DivTimeText className="col-sm-1 mr-auto" > 13:00 </DivTimeText>
      <DivTimeText className="col-sm-1 mr-auto" > 14:00 </DivTimeText>
      <DivTimeText className="col-sm-1 mr-auto" > 15:00 </DivTimeText>
      <DivTimeText className="col-sm-1 mr-auto" > 16:00 </DivTimeText>
      <DivTimeText className="col-sm-1 mr-auto" > 17:00 </DivTimeText>
      <DivTimeText className="col-sm-1 mr-auto" >
        18:00
        <div style={{ display: 'inline', float: 'right', transform: 'translateX(30px)' }}> 19:00 </div>
      </DivTimeText>
    </div>
  );
};

export default DivHour;
