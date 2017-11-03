/* eslint react/jsx-filename-extension: 0 react/no-multi-comp: 0, react/prop-types: 0 */
import _ from 'lodash';
import React from 'react';
import { DivTime, DivTimeChild } from './components-styled';
import DivHour from './div-hours';

const SliderView = (props) => {
  const { available } = props;
  let availArray = _.orderBy(available, elem => elem.id);
  return (
    <div className="container" style={{ paddingBottom: '10px' }}>
      <DivHour />
      <div className="d-flex flex-row flex-nowrap">
        {available ? availArray.map(elem => (
          <DivTime key={elem.id} className="col-sm-1 mr-auto" >
            <DivTimeChild size={elem.size} shift={elem.shift} />
          </DivTime>)) : null}
      </div>
    </div>
  );
};

export default SliderView;
