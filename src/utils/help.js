const phone = require('phone');

export function checkNumber (data) {
  const newData = data.map( elem => {
    [elem.number] = phone(elem.number, 'DE');
    return elem;
  });
  return newData;
}
