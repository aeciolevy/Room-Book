export function checkNumber (data) {
  const newData = data.map( elem => {
    !elem.number.includes('+') ? elem.number = `+49${elem.number}` : null;
    console.log('elem', elem);
    return elem;
  });
  return newData;
}
