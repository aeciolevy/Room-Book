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
