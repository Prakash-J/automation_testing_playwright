import { faker } from '@faker-js/faker';

const dob = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });

const user = {
  salutation: Math.random() > 0.5 ? 'Mr.' : 'Ms.',
  fullName: faker.person.fullName(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  mobileNumber: faker.phone.number(),
  password: faker.internet.password(12),
  day: dob.getDate().toString(),
  month: dob.toLocaleString('default', { month: 'long' }),
  year: dob.getFullYear().toString(),
  addressOne: faker.location.streetAddress(),
  addressTwo: faker.location.secondaryAddress(),
  country: faker.location.country(),
  state: faker.location.state(),
  city: faker.location.city(),
  zipcode: faker.location.zipCode(),
};

export default user;
