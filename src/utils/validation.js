export const required = value => (value ? undefined : 'Required');
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;
export const phoneNumber = value => value && !/^([0-9]{9,15})$/i.test(value) ?
  'Invalid phone number, must be at list 9 digits' : undefined;
