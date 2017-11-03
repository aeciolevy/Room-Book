import moment from 'moment';
const phone = require('phone');

export function checkNumber (data) {
  const newData = data.map( elem => {
    [elem.number] = phone(elem.number, 'DE');
    !elem.number ? elem.number = '+4912345678901' : null;
    return elem;
  });
  return newData;
}

export function translateMessage (code, text) {
  switch (code) {
    case 2000:
      return 'You must provide booking and atendee information';
    case 3000:
      return 'Invalid phone number.'
    default:
      return text;
  }
}

export const timeArray = (array) => array.map(elem => elem.split(' - '));

export const manipulate = () => {
  let obj = {};
  for (let i = 7; i < 19; i++) {
    if (i < 10) {
      obj[`0${i}`] = {size: 0, shift: 0, id: i };
    } else {
      obj[i] = {size: 0, shift: 0, id: i };
    }
  }
  return obj;
}

export const handleTime = manipulate();

const formatNumber = number => number < 10 ? `0${number}` : number;
const formatTimes = (hour, minutes) => {
  let minutesNew = 0;
  let hourNew = 0;
  if (minutes < 0){
    minutesNew = ((minutes / 60) * 100) + 100;
    hourNew = hour - 1;
  }
  if (minutes === 0) {
    minutesNew = `00`;
    hourNew = hour;
  }
  if (minutes > 0) {
    minutesNew = minutes/60 * 100;
    hourNew = hour;
  }
  return [hourNew, minutesNew];
};

export function completeObj (times, obj) {
  times.forEach((elem) => {
    const start = String(elem[0].slice(0, 2));
    const startM = String(elem[0]).slice(3, 5);
    let diffH = elem[1].slice(0, 2) - elem[0].slice(0, 2);
    let diffM = elem[1].slice(3, 5) - elem[0].slice(3, 5);
    let diffFormatted = formatTimes(diffH, diffM);
    let total = Number(`${diffFormatted[0]}${diffFormatted[1]}`);
    if (diffH === 0) {
      obj[start].size = `${(diffM / 60) * 100}%`;
    } else {
      let i = 0;
      while (total > 0) {
        const index = formatNumber(`${Number(start) + i}`);
        if (total >= 100) {
          if (i === 0 && startM !== '00') {
            obj[index].size = `${100 - (startM / 60 * 100)}%`;
            obj[index].shift = `${(startM / 60 * 100)}%`
            total -= (100 - (startM / 60 * 100));
            i += 1;
          } else {
            obj[index].size = `${100}%`;
            i += 1;
            total -= 100;
          }
        } else {
          obj[index].size =  `${total}%`;
          total -= total;
        }
      }
    }
  });
}
