import moment from 'moment';

export const required = value => (value ? undefined : 'Required');

export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

export const phoneNumber = value => value && !/^([0-9]{9,15})$/i.test(value) ?
  'Invalid phone number, must be at list 9 digits' : undefined;

export const startTime = (value, time) => {
  const flag = time.reduce( (acc, curr) => {
    const time0 = moment(curr[0], 'HH:mm');
    const time1 = moment(curr[1], 'HH:mm');
    acc = moment(value).isBetween(time0, time1, 'hour', 'minute', []) || acc;
    return acc;
  }, false);
  return !flag ? '* Time not available' : '';
};

export const greater = (name, value, time_start, time_end) => {
  if (name === 'time_start') {
    return value > time_end ? '* Start must be smaller than End' : '';
  }
  if (name === 'time_end') {
    return value < time_start ? '* End must be greater than Start' : '';
  }
};
