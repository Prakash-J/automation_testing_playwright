import { faker } from '@faker-js/faker';

const dob = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });

/**
 * @fileoverview Generates a mock user profile using Faker for development/testing purposes.
 */

/**
 * @typedef {object} User
 * @property {string} salutation - User salutation, either 'Mr.' or 'Ms.'
 * @property {object} name - Full name details
 * @property {string} name.full - Full name
 * @property {string} name.first - First name
 * @property {string} name.last - Last name
 * @property {object} contact - Contact information
 * @property {string} contact.email - Email address
 * @property {string} contact.phone - Mobile phone number
 * @property {string} password - Randomly generated secure password
 * @property {object} dob - Date of birth details
 * @property {string} dob.day - Day of birth (1–31)
 * @property {string} dob.month - Month of birth (e.g., "March")
 * @property {string} dob.year - Year of birth (e.g., "1990")
 * @property {object} address - Address details
 * @property {string} address.line1 - Primary street address
 * @property {string} address.line2 - Secondary address
 * @property {string} address.city - City
 * @property {string} address.state - State or region
 * @property {string} address.country - Country
 * @property {string} address.zip - ZIP/postal code
 */

/** @type {User} */

const user = {
  salutation: Math.random() > 0.5 ? 'Mr.' : 'Ms.',
  name: {
    full: faker.person.fullName(),
    first: faker.person.firstName(),
    last: faker.person.lastName(),
  },
  contact: {
    email: faker.internet.email(),
    phone: faker.phone.number(),
  },
  password: faker.internet.password(12),
  dob: {
    day: dob.getDate().toString(),
    month: dob.toLocaleString('default', { month: 'long' }),
    year: dob.getFullYear().toString(),
  },
  address: {
    line1: faker.location.streetAddress(),
    line2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    zip: faker.location.zipCode(),
  },
};

export default user;
