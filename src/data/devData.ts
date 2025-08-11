import { faker } from '@faker-js/faker';
import { UserData } from '../interface/userData';

const dob = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });

const userData: UserData = {
    salutation: Math.random() > 0.5 ? 'Mr.' : 'Mrs.',  // Randomly assign 'Mr.' or 'Ms.'
    userFullName: faker.person.fullName().toString(),
    userFirstName: faker.person.firstName().toString(),
    userLastName: faker.person.lastName().toString(),
    email: faker.internet.email().toString(),
    password: faker.internet.password().toString(),
    day: dob.getDate().toString(),
    month: dob.toLocaleString('default', { month: 'long' }).toString(),  // Get the month name
    year: dob.getFullYear().toString(),
    newsLetterSignUp: Math.random() > 0.5 ? true : false,
    receiveSpecialOffer: Math.random() > 0.5 ? true : false,
    company: faker.person.fullName().toString(),
    addressOne: faker.location.streetAddress().toString(),
    addressTwo: faker.location.secondaryAddress().toString(),
    country: faker.location.country().toString(),
    state: faker.location.state().toString(),
    city: faker.location.city().toString(),
    zipcode: faker.location.zipCode().toString(),
    mobileNumber: faker.phone.number().toString(),
};

export default userData;